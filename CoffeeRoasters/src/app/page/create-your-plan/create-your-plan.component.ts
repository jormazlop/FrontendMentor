import { Component } from '@angular/core';
import { CreateYourPlanPresentationComponent } from './create-your-plan-presentation/create-your-plan-presentation.component';
import { CreateYourPlanHowItWorksComponent } from './create-your-plan-how-it-works/create-your-plan-how-it-works.component';
import { CreateYourPlanSubscriptionComponent } from './create-your-plan-subscription/create-your-plan-subscription.component';

const components = [
  CreateYourPlanPresentationComponent,
  CreateYourPlanHowItWorksComponent,
  CreateYourPlanSubscriptionComponent
]

@Component({
  selector: 'app-create-your-plan',
  standalone: true,
  imports: [components],
  templateUrl: './create-your-plan.component.html',
  styleUrl: './create-your-plan.component.scss'
})
export default class CreateYourPlanComponent {

}
