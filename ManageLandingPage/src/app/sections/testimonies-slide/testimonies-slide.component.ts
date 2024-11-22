import { Component, signal, viewChild } from '@angular/core';
import { DragScrollComponent, DragScrollItemDirective } from 'ngx-drag-scroll';
import { SlideComponent } from '../../components/slide/slide.component';
import { Profil } from '../../models/profil.model';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-testimonies-slide',
  standalone: true,
  imports: [
    DragScrollComponent,
    DragScrollItemDirective,
    SlideComponent,
    ButtonComponent,
  ],
  templateUrl: './testimonies-slide.component.html',
  styleUrl: './testimonies-slide.component.scss',
})
export class TestimoniesSlideComponent {
  profils = signal<Profil[]>([
    {
      image: `/images/avatar-anisha.png`,
      name: `Anisha Li`,
      testimonie: `“Manage has supercharged our team’s workflow.
                  The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”`,
    },
    {
      image: `/images/avatar-ali.png`,
      name: `Ali Bravo`,
      testimonie: `“We have been able to cancel so many other subscriptions since using Manage.
                    There is no more cross-channel confusion and everyone is much more focused.”`,
    },
    {
      image: `/images/avatar-richard.png`,
      name: `Richard Watts`,
      testimonie: `“Manage allows us to provide structure and process.
                    It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”`,
    },
    {
      image: `/images/avatar-shanai.png`,
      name: `Shanai Gough`,
      testimonie: `“Their software allows us to track, manage and collaborate on our projects from anywhere.
                    It keeps the whole team in-sync without being intrusive.”`,
    },
  ]);

  dragScroll = viewChild(DragScrollComponent);

  active = signal(0);

  moveTo(index: number): void {
    this.dragScroll()?.moveTo(index);

    this.active.set(index);
  }
}
