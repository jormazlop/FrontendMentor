import { Component } from '@angular/core';
import { ExploreButtonComponent } from '../../components/explore-button/explore-button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ExploreButtonComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

}
