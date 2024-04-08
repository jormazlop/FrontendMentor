import {
  Directive,
  ElementRef,
  Renderer2,
  effect,
  inject,
  input,
} from '@angular/core';
import { Painting } from '../models/gallery';
import { Router } from '@angular/router';

@Directive({
  selector: '[paintings]',
  standalone: true,
})
export class PaintingsDirective {
  paintings = input.required<Painting[]>();
  columns = input.required();

  private elRef = inject(ElementRef);
  private renderer = inject(Renderer2);

  private router = inject(Router);

  constructor() {
    effect(() => {

      switch(this.columns()) {
        case 4:
          this.renderColumns4();
          break;
        case 2:
          this.renderColumns2();
          break;
        default:
        this.renderColumns1();
        break;
      }

    });
  }

  renderColumns4(): void {

    const column1 = document.createElement('div');
    this.renderer.addClass(column1, 'gallery-column');

    const firstColumn = this.paintings().filter((val, index) =>
      [0, 4, 8, 11].includes(index)
    );

    for (let painting of firstColumn) {
      const button = this.renderPainting(painting);
      this.renderer.appendChild(column1, button);
    }

    this.renderer.appendChild(this.elRef.nativeElement, column1);

    const column2 = document.createElement('div');
    this.renderer.addClass(column2, 'gallery-column');

    const secondColumn = this.paintings().filter((val, index) =>
      [1, 5, 9, 12].includes(index)
    );

    for (let painting of secondColumn) {
      const button = this.renderPainting(painting);
      this.renderer.appendChild(column2, button);
    }

    this.renderer.appendChild(this.elRef.nativeElement, column2);

    const column3 = document.createElement('div');
    this.renderer.addClass(column3, 'gallery-column');

    const thirdColumn = this.paintings().filter((val, index) =>
      [2, 6, 13].includes(index)
    );

    for (let painting of thirdColumn) {
      const button = this.renderPainting(painting);
      this.renderer.appendChild(column3, button);
    }

    this.renderer.appendChild(this.elRef.nativeElement, column3);

    const column4 = document.createElement('div');
    this.renderer.addClass(column4, 'gallery-column');

    const fourthColumn = this.paintings().filter((val, index) =>
      [3, 7, 10, 14].includes(index)
    );

    for (let painting of fourthColumn) {
      const button = this.renderPainting(painting);
      this.renderer.appendChild(column4, button);
    }

    this.renderer.appendChild(this.elRef.nativeElement, column4);
  }


  renderColumns2(): void {

    const column1 = document.createElement('div');
    this.renderer.addClass(column1, 'gallery-column');

    const firstColumn = this.paintings().filter((val, index) =>
      [0, 2, 4, 6, 8, 11, 13].includes(index)
    );

    for (let painting of firstColumn) {
      const button = this.renderPainting(painting);
      this.renderer.appendChild(column1, button);
    }

    this.renderer.appendChild(this.elRef.nativeElement, column1);

    const column2 = document.createElement('div');
    this.renderer.addClass(column2, 'gallery-column');

    const secondColumn = this.paintings().filter((val, index) =>
      [1, 3, 5, 7, 9, 10, 12, 14].includes(index)
    );

    for (let painting of secondColumn) {
      const button = this.renderPainting(painting);
      this.renderer.appendChild(column2, button);
    }

    this.renderer.appendChild(this.elRef.nativeElement, column2);
  }

  renderColumns1(): void {

    const column1 = document.createElement('div');
    this.renderer.addClass(column1, 'gallery-column');

    const firstColumn = this.paintings();

    for (let painting of firstColumn) {
      const button = this.renderPainting(painting);
      this.renderer.appendChild(column1, button);
    }

    this.renderer.appendChild(this.elRef.nativeElement, column1);
  }


  renderPainting(painting: Painting): HTMLButtonElement {
    const image: HTMLImageElement = document.createElement('img');
    this.renderer.addClass(image, 'gallery-image');
    image.src = painting.images.gallery;
    image.ariaHidden = 'true';

    const button: HTMLButtonElement = document.createElement('button');
    button.title = 'Painting ' + painting.name;
    this.renderer.addClass(button, 'gallery-button');
    this.renderer.appendChild(button, image);

    const title: HTMLDivElement = document.createElement('div');
    this.renderer.addClass(title, 'gallery-title');
    const strong: HTMLElement = document.createElement('strong');
    strong.innerText = painting.name;
    this.renderer.appendChild(title, strong);

    const p: HTMLParagraphElement = document.createElement('p');
    p.innerText = painting.artist.name;
    this.renderer.appendChild(title, p);

    this.renderer.appendChild(button, title);

    this.renderer.listen(button, 'click', (evt) => {
      const index = this.paintings().indexOf(painting);
      this.router.navigate(['detail', index]);
    });

    return button;
  }
}
