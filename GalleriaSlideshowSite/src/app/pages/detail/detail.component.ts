import { Component, InputSignal, effect, inject, input, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ToSignalOptions, toSignal } from '@angular/core/rxjs-interop';
import { Painting } from '../../models/gallery';
import { map, of } from 'rxjs';
import { DetailImageComponent } from '../../components/detail-image/detail-image.component';
import { DetailDescriptionComponent } from '../../components/detail-description/detail-description.component';
import { SlideService } from '../../services/slide.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [DetailImageComponent, DetailDescriptionComponent, RouterModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export default class DetailComponent {

  painting$ = toSignal<Painting>(
    inject(ActivatedRoute).data.pipe(map((data) => data['painting'])),
    { requireSync: true }
  );

  id = input(0);

  private router = inject(Router);

  private slideService = inject(SlideService);

  progress$ = this.slideService.progress$;

  constructor() {

    this.slideService.initSlide();

    effect(() => {
      if(this.progress$() >= 100) {
        this.slideService.initSlide();
        this.id() > 13 ? this.router.navigate([`./home`]) : this.router.navigate([`./detail/${(+this.id() + 1)}`]);
      }
    }, {allowSignalWrites: true})
  }


}
