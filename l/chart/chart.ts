import { children, bindable } from 'aurelia-framework';
import ChartJs from 'chart.js';
import { ChartData } from '../chart-data/chart-data';

export class Chart {
  @bindable() labels: string[];
  @children('chart-data') chartData: Array<ChartData>;

  public chart: ChartJs;
  public canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  constructor() {
    this.labels = [];
    this.chartData = null;
  }

  public bind(): void {
    this.context = this.canvas.getContext('2d');
  }

  public attached(): void {
    this.renderChart();
  }

  public detached(): void {
    this.chart.destroy();
  }

  private renderChart(): void {
    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new ChartJs(this.context, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: this.chartData
      }
    });
  }
}
