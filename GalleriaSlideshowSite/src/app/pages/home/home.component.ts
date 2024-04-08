import { Component, TemplateRef, ViewContainerRef, ViewEncapsulation, inject } from '@angular/core';
import { GalleriaService } from '../../services/galleria.service';
import { ThumbnailImageComponent } from '../../components/thumbnail-image/thumbnail-image.component';
import { PaintingsDirective } from '../../directives/paintings.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ThumbnailImageComponent, PaintingsDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

  paintings$ = inject(GalleriaService).paintings$;

}
