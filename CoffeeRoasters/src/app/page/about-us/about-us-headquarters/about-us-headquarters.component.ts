import { Component, signal } from '@angular/core';

type Headquarter = {
  image: string;
  title: string;
  addresses: string[];
}

@Component({
  selector: 'app-about-us-headquarters',
  standalone: true,
  imports: [],
  templateUrl: './about-us-headquarters.component.html',
  styleUrl: './about-us-headquarters.component.scss'
})
export class AboutUsHeadquartersComponent {

  headquarters = signal<Headquarter[]>([
    {
      image: 'assets/about/desktop/illustration-uk.svg',
      title: 'United Kingdom',
      addresses: ['68  Asfordby Rd', 'Alcaston', 'SY6 1YA', '+44 1241 918425']
    },
    {
      image: 'assets/about/desktop/illustration-canada.svg',
      title: 'Canada',
      addresses: ['1528  Eglinton Avenue', 'Toronto', 'Ontario M4P 1A6', '+1 416 485 2997']
    },
    {
      image: 'assets/about/desktop/illustration-australia.svg',
      title: 'Australia',
      addresses: ['36 Swanston Street', 'Kewell', 'Victoria', '+61 4 9928 3629']
    }
  ]);

}
