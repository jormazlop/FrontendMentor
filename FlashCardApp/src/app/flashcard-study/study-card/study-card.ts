import { Component } from '@angular/core';
import { StudyCardHeader } from './study-card-header/study-card-header';
import { StudyCardBody } from './study-card-body/study-card-body';
import { StudyCardFooter } from './study-card-footer/study-card-footer';

@Component({
  selector: 'study-card',
  imports: [StudyCardHeader, StudyCardBody, StudyCardFooter],
  templateUrl: './study-card.html',
  styleUrl: './study-card.scss',
})
export class StudyCard {

}
