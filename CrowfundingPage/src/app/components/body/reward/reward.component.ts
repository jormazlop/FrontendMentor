import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PledgeService } from 'src/app/services/pledge-service.service';
import { ModalProjectComponent } from '../../modal-project/modal-project.component';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.scss']
})
export class RewardComponent implements OnInit {

  @Input() title: string = '';

  @Input() quantity: number = 0;

  @Input() description: string = '';

  @Input() left: number = 0;

  modalRef?: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private pledgeService: PledgeService
  ) { }

  ngOnInit(): void {
    this.pledgeService.getPledges().subscribe(rewards => {
      this.modalRef?.hide();
    })
  }

  openModal() {
    this.modalRef = this.modalService.show(ModalProjectComponent);
  }

}
