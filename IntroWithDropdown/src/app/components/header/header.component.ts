import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showFeatures: boolean = false;
  showCompanys: boolean = false;

  @Output() menuEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  displayFeatures() {
    this.showFeatures = !this.showFeatures;
    this.showCompanys = false;
  }

  displayCompany() {
    this.showCompanys = !this.showCompanys;
    this.showFeatures = false;
  }

  clickMenu() {
    this.menuEmitter.emit();
  }

}
