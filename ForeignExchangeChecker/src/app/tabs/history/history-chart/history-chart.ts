import {
  Component,
  effect,
  ElementRef,
  HostListener,
  input,
  signal,
  untracked,
  viewChild,
} from '@angular/core';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart, LineChart } from 'echarts/charts';
import type { EChartsOption } from 'echarts';
import { GridComponent, TooltipComponent } from 'echarts/components';
import { Rate } from '@model/model';
import { DatePipe, UpperCasePipe } from '@angular/common';

echarts.use([CanvasRenderer, LineChart, GridComponent, BarChart, TooltipComponent]);

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

  chartType = input<string>('area');

  @HostListener('window:resize')
  onResize() {
    this.chartInstance?.resize();
  }

  constructor() {
    this.effectUpdateChart();
  }

  private effectUpdateChart(): void {
    effect(() => {
      const historyData = this.historyData()
        ?.slice()
        .sort((a, b) => a.date.localeCompare(b.date));

      const chartType = this.chartType();

      untracked(() => {
        if (!historyData) {
          return;
        }

        this.lastRate.set(historyData[historyData.length - 1]);

        const base = this.generateBaseOptions(historyData);

        const options = this.applyChartType(
          base,
          historyData.map((r) => r.rate),
          chartType,
        );

        this.updateChart(options);
      });
    });
  }

  private generateBaseOptions(data: Rate[]): EChartsOption {
    const daysData = data.map((r) => this.formatDateLabel(r.date));
    const rateData = data.map((r) => r.rate);

    const min = Math.min(...rateData);
    const max = Math.max(...rateData);

    return {
      animation: false,
      color: ['#cef739'],
      tooltip: {
        trigger: 'axis',
        backgroundColor: '#171719',
        borderColor: '#3d3d3d',
        borderWidth: 1,
        textStyle: {
          color: '#fff',
        },
        padding: 10,
      },
      grid: {
        left: 30,
        right: 30,
        bottom: 10,
        top: 30,
      },

      xAxis: {
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

      yAxis: {
        type: 'value',
        min,
        max,
        interval: (max - min) / 2,
        axisLabel: {
          color: '#9d9d9d',
          formatter: (v: number) => v.toFixed(4),
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: '#454547',
          },
        },
      },
    };
  }

  private applyChartType(base: EChartsOption, data: number[], type: string): EChartsOption {
    const series: any = {
      type: type === 'area' ? 'line' : type,
      data,
      smooth: type !== 'bar',
      showSymbol: false,
      lineStyle: {
        width: 2,
        color: '#cef739',
      },
    };

    if (type === 'area') {
      series.areaStyle = {
        opacity: 0.6,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(206,247,57,0.9)' },
          { offset: 1, color: 'rgba(40,51,0,0)' },
        ]),
      };
    }

    if (type === 'step') {
      series.type = 'line';
      series.step = 'middle';
    }

    return {
      ...base,
      series: [series],
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
      notMerge: true,
      lazyUpdate: true,
      silent: true,
    });
  }
}
