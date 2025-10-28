import { Component, input } from '@angular/core';
import { MissionT } from '@shared/models/mission';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.html',
  styleUrl: './mission.scss'
})
export class Mission {

  missions = input.required<MissionT[]>();
  title = input.required<string>();

}
