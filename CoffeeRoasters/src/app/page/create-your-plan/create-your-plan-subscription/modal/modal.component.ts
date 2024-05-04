import { Component, computed, inject, input } from '@angular/core';
import { OptionItem } from '../create-your-plan-subscription.component';
import { SummaryPipe } from '../../../../pipes/summary.pipe';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [SummaryPipe],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  options = input.required<OptionItem[]>();

  total = computed(() => {

      let ship = +this.options()[4].options[this.options()[4].selected!].description.substring(1, 5).trimEnd();

      switch(this.options()[4].selected) {
        case 0:
          ship *= 4;
          break;
        case 1:
          ship *= 2;
          break;
        case 2:
        default:
          break;
      }

    return ship.toFixed(2);
  });

  private modalService = inject(NgbModal);
  private toastr = inject(ToastrService);
  private router = inject(Router);

  onCheckout(): void {
    this.modalService.dismissAll();
    this.router.navigate(['home']);
    this.toastr.success('Order saved!');
  }

}
