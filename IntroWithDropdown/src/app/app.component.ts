import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'IntroWithDropdown';

  menuOpen: boolean = false;
  showFeatures: boolean = false;
  showCompanys: boolean = false;

  displayFeatures() {
    this.showFeatures = !this.showFeatures;
    this.showCompanys = false;
  }

  displayCompany() {
    this.showCompanys = !this.showCompanys;
    this.showFeatures = false;
  }

  clickMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
