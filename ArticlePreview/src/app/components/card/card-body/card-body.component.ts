import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardBodyComponent {


  showSubMenu = false;

  subMenuResponsive(): void {
    this.showSubMenu = !this.showSubMenu;
  }

}
