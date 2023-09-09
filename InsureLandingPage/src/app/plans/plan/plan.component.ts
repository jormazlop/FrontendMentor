import { Component, EventEmitter, Input as PlanInput, Output as PlanOutput } from '@angular/core';
import { Plan } from '../models/plan';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent {

  @PlanInput({required: true}) plan: Plan = new Plan();

  @PlanOutput() order = new EventEmitter();


  onClickOrder(): void {
    this.order.emit();
  }
}
