import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Pledge } from 'src/app/models/pledge.interface';
import { PledgeService } from 'src/app/services/pledge-service.service';
import { QuantityService } from 'src/app/services/quantity-service.service';
import { ModalThanksComponent } from '../modal-thanks/modal-thanks.component';


@Component({
  selector: 'app-modal-project',
  templateUrl: './modal-project.component.html',
  styleUrls: ['./modal-project.component.scss']
})
export class ModalProjectComponent implements OnInit {

  rewards: Pledge[] = [];

  noPledge: boolean = false;

  checked: boolean[] = [];

  quantityBacked: number = 0;

  modalRef?: BsModalRef;

  constructor(
    private quantityService: QuantityService,
    private pledgeService: PledgeService,
    private modalService: BsModalService,
    ) { }

  ngOnInit(): void {

    this.pledgeService.getPledges().subscribe(rewards => {
      this.rewards = rewards;
      this.rewards.forEach(r => {
        this.checked.push(false);
      });
    })
  }

  updateChecked(index: number) {
    this.checked = [];
    this.rewards.forEach(r => {
      this.checked.push(false);
    });
    this.checked[index] = true;
    this.noPledge = false;

    this.quantityBacked = this.rewards[index].quantity;
  }

  checkedNoPledge() {
    this.checked = [];
    this.rewards.forEach(r => {
      this.checked.push(false);
    });

    this.noPledge = true;
  }

  onClickContinue(quantityBacked: number, index: number): void {

    this.quantityService.setQuantity(quantityBacked);

    this.rewards[index].left -= 1;

    this.pledgeService.setPledges(this.rewards);

    this.modalRef = this.modalService.show(ModalThanksComponent);
  }

  OnCloseModal(): void {
    this.modalService.hide();
  }

  onClickWithoutPledge(quantityBacked: number) {
    this.quantityService.setQuantity(quantityBacked);
    this.pledgeService.setPledges(this.rewards);
    this.modalRef = this.modalService.show(ModalThanksComponent);
  }

}
