import { Component, computed, input } from '@angular/core';
import { Profil } from '../../models/profil.model';

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.scss'
})
export class SlideComponent {
  profil = input.required<Profil>();
  url = computed(() => `url(${this.profil().image})`)
}
