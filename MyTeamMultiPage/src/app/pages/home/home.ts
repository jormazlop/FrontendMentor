import { Component } from '@angular/core';
import { FindTalent } from './find-talent/find-talent';
import { BuildManage } from './build-manage/build-manage';
import { Delivering } from './delivering/delivering';
import { Ready } from '@shared/components/ready/ready';

@Component({
  selector: 'app-home',
  imports: [FindTalent, BuildManage, Delivering, Ready],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export default class Home {

}
