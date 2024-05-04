import { Component, effect, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

type HowItWorks = {
  num: string,
  title: string,
  description: string
}

@Component({
  selector: 'app-home-how-it-works',
  standalone: true,
  imports: [],
  templateUrl: './home-how-it-works.component.html',
  styleUrl: './home-how-it-works.component.scss'
})
export class HomeHowItWorksComponent {

  howItWorks = signal<HowItWorks[]>([
    {
      num: '01' ,
      title: 'Pick your coffee',
      description: `Select from our evolving range of artisan coffees.
      Our beans are ethically sourced and we pay fair prices for them.
      There are new coffees in all profiles every month for you to try out.`
    },
    {
      num: '02' ,
      title: 'Choose the frequency',
      description: `Customize your order frequency, quantity, even your roast style and grind type.
      Pause, skip or cancel your subscription with no commitment through our online portal.`
    },
    {
      num: '03' ,
      title: 'Receive and enjoy!',
      description: `We ship your package within 48 hours, freshly roasted.
      Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.`
    },
  ]);

  private router = inject(Router);

  onClickCreatePlan(): void {
    this.router.navigate(['create-your-plan']);
  }

}
