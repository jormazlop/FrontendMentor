import { Component, computed, effect, inject, signal } from '@angular/core';
import { AccordeonComponent } from '../../../components/accordeon/accordeon.component';
import { SummaryPipe } from '../../../pipes/summary.pipe';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

type Option = {
  title: string,
  description: string
}

export type OptionItem = {
  question: string,
  options: Option[],
  selected?: number,
  display: boolean,
  disabled: boolean
}

@Component({
  selector: 'app-create-your-plan-subscription',
  standalone: true,
  imports: [AccordeonComponent, SummaryPipe],
  templateUrl: './create-your-plan-subscription.component.html',
  styleUrl: './create-your-plan-subscription.component.scss'
})
export class CreateYourPlanSubscriptionComponent {

  step = computed<number>(() => {
    const newStep: number = this.options().map(val => val.selected).findIndex(val => val === undefined) + 1 || this.options().length;
    return newStep;
  });

  effect1$ = effect(() => {
    this.onOpen(this.step() - 1);
  }, { allowSignalWrites: true });

  effect2$ = effect(() => {
    switch(this.options()[2].selected) {
      case 1:
        this.options()[4].options[0].description = '$13.00 per shipment. Includes free first-class shipping.';
        this.options()[4].options[1].description = '$17.50 per shipment. Includes free first-class shipping.';
        this.options()[4].options[2].description = '$22.00 per shipment. Includes free first-class shipping.';
        break;
      case 2:
        this.options()[4].options[0].description = '$22.00 per shipment. Includes free first-class shipping.';
        this.options()[4].options[1].description = '$32.00 per shipment. Includes free first-class shipping.';
        this.options()[4].options[2].description = '$42.00 per shipment. Includes free first-class shipping.';
        break;
      case 0:
      default:
        this.options()[4].options[0].description = '$7.20 per shipment. Includes free first-class shipping.';
        this.options()[4].options[1].description = '$9.60 per shipment. Includes free first-class shipping.';
        this.options()[4].options[2].description = '$12.00 per shipment. Includes free first-class shipping.';
        break;
    }
  });

  effect3$ = effect(() => {
    if(this.options()[0].selected === 0) {
      this.options()[3].selected = -1;
      this.options()[3].disabled = true;
    }
  }, {allowSignalWrites: true});

  effect4$ = effect(() => {
    this.options().forEach((option, idx) => {
      if (this.step() - 1 >= idx) {
        option.disabled = false;
      }
    });
  })

  options = signal<OptionItem[]>([
    {
      question: 'How do you drink your coffee?',
      options: [
        {
          title: 'Capsule',
          description: 'Compatible with Nespresso systems and similar brewers'
        },
        {
          title: 'Filter',
          description: 'For pour over or drip methods like Aeropress, Chemex, and V60'
        },
        {
          title: 'Espresso',
          description: 'Dense and finely ground beans for an intense, flavorful experience'
        },
      ],
      display: false,
      disabled: false
    },
    {
      question: 'What type of coffee?',
      options: [
        {
          title: 'Single Origin',
          description: 'Distinct, high quality coffee from a specific family-owned farm'
        },
        {
          title: 'Decaf',
          description: 'Just like regular coffee, except the caffeine has been removed'
        },
        {
          title: 'Blended',
          description: 'Combination of two or three dark roasted beans of organic coffees'
        },
      ],
      display: false,
      disabled: true
    },
    {
      question: 'How much would you like?',
      options: [
        {
          title: '250g',
          description: 'Perfect for the solo drinker. Yields about 12 delicious cups.'
        },
        {
          title: '500g',
          description: 'Perfect option for a couple. Yields about 40 delectable cups.'
        },
        {
          title: '1000g',
          description: 'Perfect for offices and events. Yields about 90 delightful cups.'
        },
      ],
      display: false,
      disabled: true
    },
    {
      question: 'Want us to grind them?',
      options: [
        {
          title: 'Wholebean',
          description: 'Best choice if you cherish the full sensory experience'
        },
        {
          title: 'Filter',
          description: 'For drip or pour-over coffee methods such as V60 or Aeropress'
        },
        {
          title: 'Cafetiére',
          description: 'Course ground beans specially suited for french press coffee'
        },
      ],
      display: false,
      disabled: true
    },
    {
      question: 'How often should we deliver?',
      options: [
        {
          title: 'Every week',
          description: '$7.20 per shipment. Includes free first-class shipping.'
        },
        {
          title: 'Every 2 weeks',
          description: '$9.60 per shipment. Includes free priority shipping.'
        },
        {
          title: 'Every month',
          description: '$12.00 per shipment. Includes free priority shipping.'
        },
      ],
      display: false,
      disabled: true
    }
  ]);

  private modalService = inject(NgbModal);

  onSelect(idx: number, select: number): void {
    this.options.update(val => {
      val[idx].selected = select;
      return [ ...val];
    });
  }

  onOpen(idx: number): void {
    this.options.update(val => {
      val[idx].display = !val[idx].display;
      return [ ...val];
    });
  }

  onCreatePlan(): void {
    const config: NgbModalOptions = {
      centered: true
    }

    const modalRef = this.modalService.open(ModalComponent, config);
    modalRef.componentInstance.options = this.options;
  }

}
