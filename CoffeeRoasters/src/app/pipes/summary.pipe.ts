import { Pipe, PipeTransform } from '@angular/core';
import { OptionItem } from '../page/create-your-plan/create-your-plan-subscription/create-your-plan-subscription.component';

@Pipe({
  name: 'summary',
  standalone: true
})
export class SummaryPipe implements PipeTransform {

  transform(options: OptionItem[]): string {

    let stringHTML = '<h3 class="summary-title">ORDER SUMMARY</h3><p>“';

    switch(options[0].selected) {
      case 0:
        stringHTML += 'I drink my coffee using <span>Capsules</span>, ';
        break;
      case 1:
        stringHTML += 'I drink my coffee as <span>Filter</span>, ';
        break;
      case 2:
        stringHTML += 'I drink my coffee as <span>Espresso</span>, ';
        break;
      default:
        stringHTML += 'I drink my coffe <span>______</span>, '
    }

    switch(options[1].selected) {
      case 0:
        stringHTML += 'with a <span>Single Origin</span> type of bean.';
        break;
      case 1:
        stringHTML += 'with a <span>Decaf</span> type of bean.';
        break;
      case 2:
        stringHTML += 'with a <span>Blended</span> type of bean.';
        break;
      default:
        stringHTML += 'with a <span>______</span> type of bean.';
        break;
    }

    switch(options[2].selected) {
      case 0:
        stringHTML += '<span> 250g</span> ground';
        break;
      case 1:
        stringHTML += '<span> 500g</span> ground';
        break;
      case 2:
        stringHTML += '<span> 1000g</span> ground';
        break;
      default:
        stringHTML += '<span>______</span> ground';
        break;
    }

    switch(options[3].selected) {
      case -1:
        stringHTML += ', ';
        break;
      case 0:
        stringHTML += ' ala <span>Wholebean</span>, ';
        break;
      case 1:
        stringHTML += ' ala <span>Filter</span>, ';
        break;
      case 2:
        stringHTML += ' ala <span>Cafetiére</span>, ';
        break;
      default:
        stringHTML += ' ala <span>______</span>, ';
        break;
    }

    switch(options[4].selected) {
      case 0:
        stringHTML += 'sent to me <span>Every Week</span>.”';
        break;
      case 1:
        stringHTML += 'sent to me <span>Every 2 weeks</span>.”';
        break;
      case 2:
        stringHTML += 'sent to me <span>Every month</span>.”';
        break;
      default:
        stringHTML += 'sent to me <span>______</span>.”';
        break;
    }


    return stringHTML;
  }

}
