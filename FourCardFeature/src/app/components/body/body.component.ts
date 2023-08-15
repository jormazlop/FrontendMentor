import { Component } from '@angular/core';
import { Card } from 'src/app/shared/models/card.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  cardList: Card[] = [
    {
      color: '#44D3D2',
      title: 'Supervisor',
      description: 'Monitors activity to identify project roadblocks',
      image: 'icon-supervisor.svg'
    },
    {
      color: '#EA5454',
      title: 'Team Builder',
      description: 'Scans our talent network to create the optimal team for your project',
      image: 'icon-team-builder.svg'
    },
    {
      color: '#FCAE4A',
      title: 'Karma',
      description: 'Regularly evaluates our talent to ensure quality',
      image: 'icon-karma.svg'
    },
    {
      color: '#549EF2',
      title: 'Calculator',
      description: 'Uses data from past projects to provide better delivery estimates',
      image: 'icon-calculator.svg'
    }
  ]
}
