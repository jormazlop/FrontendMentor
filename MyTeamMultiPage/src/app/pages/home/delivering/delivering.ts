import { Component } from '@angular/core';

@Component({
  selector: 'app-delivering',
  imports: [],
  templateUrl: './delivering.html',
  styleUrl: './delivering.scss',
})
export class Delivering {

  stories = [
    {
      story: `“The team perfectly fit the specialized skill set required.
         They focused on the most essential features helping us launch the platform eight months faster than planned.”`,
      name: `Kady Baker`,
      position: `Product Manager at Bookmark`,
      image: `/images/avatar-kady.jpg`
    },
        {
      story: `“We needed to automate our entire onboarding process.
               The team came in and built out the whole journey.
               Since going live, user retention has gone through the roof!”`,
      name: `Aiysha Reese`,
      position: `Founder of Manage`,
      image: `/images/avatar-aiysha.jpg`
    },
        {
      story: `“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio.
                The launch was an instant success with 100k downloads in the first month.”`,
      name: `Arthur Clarke`,
      position: `Co-founder of MyPhysio`,
      image: `/images/avatar-arthur.jpg`
    }
  ]
}
