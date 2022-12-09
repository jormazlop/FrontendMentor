import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-thanks',
  templateUrl: './modal-thanks.component.html',
  styleUrls: ['./modal-thanks.component.scss']
})
export class ModalThanksComponent implements OnInit {

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
  }

  OnClickButton(): void {
    this.modalService.hide();
  }

}
