import { Component } from '@angular/core';

@Component({
  selector: 'app-build-manage',
  imports: [],
  templateUrl: './build-manage.html',
  styleUrl: './build-manage.scss',
})
export class BuildManage {

  features = [
    {
      image: '/images/icon-person.svg',
      title: `Experienced Individuals`,
      description: `Our network is made up of highly experienced professionals who are passionate about what they do.`
    },
       {
      image: '/images/icon-cog.svg',
      title: `Easy to Implement`,
      description: `Our processes have been refined over years of implementation meaning our teams always deliver.`
    },
       {
      image: '/images/icon-chart.svg',
      title: `Enhanced Productivity`,
      description: `Our customized platform with in-built analytics helps you manage your distributed teams.`
    }
  ]
}
