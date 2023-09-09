import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansComponent } from './plans.component';
import { PlanRoutingModule } from './plans-routing.module';
import { PlanComponent } from './plan/plan.component';
import { PricePipe } from './pipes/price.pipe';
import { UsersPipe } from './pipes/users.pipe';
import { ProjectsPipe } from './pipes/projects.pipe';
import { PlanDirective } from './directive/plan.directive';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    PlansComponent,
    PlanComponent,
    PricePipe,
    UsersPipe,
    ProjectsPipe,
    PlanDirective
  ],
  imports: [
    CommonModule,
    PlanRoutingModule,
    MatProgressSpinnerModule
  ]
})
export class PlansModule { }
