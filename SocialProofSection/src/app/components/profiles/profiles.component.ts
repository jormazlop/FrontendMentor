import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-profiles',
  standalone: true,
  imports: [CommonModule, ProfileComponent],
  templateUrl: './profiles.component.html',
  styleUrl: './profiles.component.scss'
})
export class ProfilesComponent {

  profiles = [
    {
      name: 'Colton Smith',
      image: '../../../assets/image-colton.jpg',
      description: `“We needed the same printed design as the one we had ordered a week prior.
                      Not only did they find the original order, but we also received it in time. Excellent!”`
    },
    {
      name: 'Irene Roberts',
      image: '../../../assets/image-irene.jpg',
      description: `“Customer service is always excellent and very quick turn around.
                      Completely delighted with the simplicity of the purchase and the speed of delivery.”`
    },
    {
      name: 'Anne Wallace',
      image: '../../../assets/image-anne.jpg',
      description: `“Put an order with this company and can only praise them for the very high standard.
                      Will definitely use them again and recommend them to everyone!”`
    }
  ]
}
