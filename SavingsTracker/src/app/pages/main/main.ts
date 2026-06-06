import { Component } from '@angular/core';
import { Summary } from './summary/summary';
import { Goals } from './goals/goals';

@Component({
  selector: 'app-main',
  imports: [Summary, Goals],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export default class Main {
}
