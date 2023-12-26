import { Component } from '@angular/core';
import { LinkComponent } from '../../components/link/link.component';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-stay-productive',
  standalone: true,
  imports: [LinkComponent, CardComponent],
  templateUrl: './stay-productive.component.html',
  styleUrl: './stay-productive.component.scss'
})
export class StayProductiveComponent {

}
