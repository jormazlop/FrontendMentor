import { Component, effect, ElementRef, input, signal, untracked, viewChild } from '@angular/core';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart } from 'echarts/charts';
import type { EChartsOption } from 'echarts';
import { GridComponent } from 'echarts/components';
import { Rate } from '@model/model';
import { DatePipe, UpperCasePipe } from '@angular/common';

echarts.use([CanvasRenderer, LineChart, GridComponent]);

@Component({
  selector: 'foreign-history-chart',
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './history-chart.html',
  styleUrl: './history-chart.scss',
})
export class HistoryChart {
  private readonly chart = viewChild<ElementRef>('chart');
  private chartInstance: echarts.ECharts | undefined;

  historyData = input<Rate[]>();
  lastRate = signal<Rate | undefined>(undefined);

  today = new Date();

  constructor() {
    this.effectUpdateChart();
  }

  private effectUpdateChart(): void {
    effect(() => {
      const historyData = this.historyData()
        ?.slice()
        .sort((a, b) => a.date.localeCompare(b.date));

      untracked(() => {
        if (!historyData) {
          return;
        }

        this.lastRate.set(historyData[historyData.length - 1]);

        const chartOptions = this.generateGradientOptions(historyData);

        this.updateChart(chartOptions);
      });
    });
  }

  private generateGradientOptions(data: Rate[]): EChartsOption {
    const daysData = data.map((rate) => this.formatDateLabel(rate.date));
    const rateData = data.map((rate) => rate.rate);

    const min = Math.min(...rateData);
    const max = Math.max(...rateData);

    return {
      animation: false,
      color: ['#cef739'],
      grid: {
        left: 30,
        right: 30,
        bottom: 10,
        top: 30,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: daysData,
          axisLabel: {
            color: '#9d9d9d',
            formatter: (value: string, index: number) => {
              return index === 0 ? `{first|${value}}` : value;
            },
            rich: {
              first: {
                padding: [0, 0, 0, 60],
              },
            },
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          max,
          min,
          interval: (max - min) / 2,
          axisLabel: {
            color: '#9d9d9d',
            formatter: (value: number) => `${value.toFixed(4)}`,
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              color: '#454547',
              width: 1,
            },
          },
        },
      ],
      series: [
        {
          name: 'Rate history',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 2,
            color: '#cef739',
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.6,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(206, 247, 57, 0.9)',
              },
              {
                offset: 0.8,
                color: 'rgba(206, 247, 57, 0.05)',
              },
              {
                offset: 1,
                color: 'rgba(40, 51, 0, 0.0)',
              },
            ]),
          },
          emphasis: {
            focus: 'series',
          },

          data: rateData,
        },
      ],
    };
  }

  private formatDateLabel(date: string): string {
    const [year, month, day] = date.split('-').map(Number);
    const parsedDate = new Date(year, month - 1, day);

    return new Intl.DateTimeFormat('en', {
      day: 'numeric',
      month: 'short',
      year: '2-digit',
    }).format(parsedDate);
  }

  private updateChart(options: EChartsOption): void {
    if (!this.chartInstance) {
      this.chartInstance = echarts.init(this.chart()!.nativeElement);
    }

    this.chartInstance.setOption(options, {
      notMerge: false,
      lazyUpdate: true,
      silent: true,
    });
  }
}
