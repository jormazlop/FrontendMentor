import { Component } from '@angular/core';
import { Tag } from '@shared/directives/tag';

@Component({
  selector: 'app-title',
  imports: [Tag],
  templateUrl: './title.html',
  styleUrl: './title.scss'
})
export class Title {

}
