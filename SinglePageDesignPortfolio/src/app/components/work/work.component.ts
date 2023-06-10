import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgImageSliderModule } from 'ng-image-slider';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, NgImageSliderModule],
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {

  imageObject: Array<object> = [
    {
      image: '../../../assets/image-slide-1.jpg',
      thumbImage: '../../../assets/image-slide-1.jpg',
      alt: 'First Image'
    },
    {
      image: '../../../assets/image-slide-2.jpg',
      thumbImage: '../../../assets/image-slide-2.jpg',
      alt: 'Second Image'
    },
    {
      image: '../../../assets/image-slide-3.jpg',
      thumbImage: '../../../assets/image-slide-3.jpg',
      alt: 'Third Image'
    },
    {
      image: '../../../assets/image-slide-4.jpg',
      thumbImage: '../../../assets/image-slide-4.jpg',
      alt: 'Fourth Image'
    },
    {
      image: '../../../assets/image-slide-5.jpg',
      thumbImage: '../../../assets/image-slide-5.jpg',
      alt: 'Fifth Image'
    }
  ];

  imageSize = { width: 505, height: 360, space: 30 }

}
