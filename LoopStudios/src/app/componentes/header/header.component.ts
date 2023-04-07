import { Component, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private offcanvasService: NgbOffcanvas) {}

  openRight(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}

}
