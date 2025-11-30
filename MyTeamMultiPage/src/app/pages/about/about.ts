import { Component } from '@angular/core';
import { AboutInfo } from './about-info/about-info';
import { MeetDirectors } from './meet-directors/meet-directors';
import { Clients } from './clients/clients';
import { Ready } from '@shared/components/ready/ready';

@Component({
  selector: 'app-about',
  imports: [AboutInfo, MeetDirectors, Clients, Ready],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export default class About {

}
