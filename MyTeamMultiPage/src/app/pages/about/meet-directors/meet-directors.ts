import { Component } from '@angular/core';
import { Card } from '@shared/components/card/card';
import { Linkedin } from '@shared/icons/linkedin/linkedin';
import { Twitter } from '@shared/icons/twitter/twitter';

@Component({
  selector: 'app-meet-directors',
  imports: [Card, Twitter, Linkedin],
  templateUrl: './meet-directors.html',
  styleUrl: './meet-directors.scss',
})
export class MeetDirectors {

  directors = [
    {
      name: 'Nikita Marks',
      position: 'Founder & CEO',
      description: `“It always amazes me how much talent there is in every corner of the globe.”`,
      image: "/images/avatar-nikita.jpg"
    },
        {
      name: 'Cristian Duncan',
      position: 'Co-founder & COO',
      description: `“Distributed teams required unique processes. You need to approach work in a new way.”`,
      image: "/images/avatar-christian.jpg"
    },
        {
      name: 'Cruz Hamer',
      position: 'Co-founder & CTO',
      description: `“Technology is at the forefront of enabling distributed teams. That's where we come in.”`,
      image: "/images/avatar-cruz.jpg"
    },
        {
      name: 'Drake Heaton',
      position: 'Business Development Lead',
      description: `“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”`,
      image: "/images/avatar-drake.jpg"
    },
        {
      name: 'Griffin Wise',
      position: 'Lead Marketing',
      description: `“Unique perspectives shape unique products, which is what you need to survive these days.”`,
      image: "/images/avatar-griffin.jpg"
    },
        {
      name: 'Aden Allan',
      position: 'Head of Talent',
      description: `“Empowered teams create truly amazing products. Set the north star and let them follow it.”`,
      image: "/images/avatar-aden.jpg"
    }
  ]
}
