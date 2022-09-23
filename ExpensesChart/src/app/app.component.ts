import { Component } from '@angular/core';
import data from '../assets/data.json';
import { DataChart } from './models/data';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ExpensesChart';

  dataJson : DataChart[] = [];

  min = 0;
  max = 0;

  barChartOptions: ChartConfiguration['options'] = {} as ChartConfiguration['options'];
  barChartData: ChartData<'bar'> = {} as ChartData<'bar'>;
  barChartType: ChartType = 'bar';

  ngOnInit() {

    this.dataJson = data;
    this.min = Math.floor(Math.min(...this.dataJson.map(d => d.amount)));
    this.max = Math.round(Math.max(...this.dataJson.map(d => d.amount)));

    this.barChartOptions = {
      responsive: true,
      scales: {
        x: {grid: { display: false }},
        y: {display: false}
      },
      backgroundColor: 'hsl(10, 79%, 65%)',
      plugins: {
        legend: {
          display: false,
        }
      }
    };

    this.barChartData = {
      labels: this.dataJson.map(d => d.day),
      datasets: [
        { data: this.dataJson.map(d => d.amount) , hoverBackgroundColor: 'hsl(186, 34%, 60%)', borderRadius: 10}
      ]
    };

  }

}
