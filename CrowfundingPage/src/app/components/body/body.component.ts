import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Pledge } from 'src/app/models/pledge.interface';
import { PledgeService } from 'src/app/services/pledge-service.service';
import { ModalProjectComponent } from '../modal-project/modal-project.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  rewards: Pledge[] = [];

  bookmark: boolean = false;

  modalRef?: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private pledgeService: PledgeService
  ) { }

  ngOnInit(): void {
    this.pledgeService.getPledges().subscribe(rewards => {
      this.rewards = rewards;
      this.modalRef?.hide();
    })
  }

  onClickBookmark() {
    this.bookmark = !this.bookmark;
  }

  openModal() {
    this.modalRef = this.modalService.show(ModalProjectComponent);
  }

}
