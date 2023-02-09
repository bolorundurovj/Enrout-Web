import {Component} from '@angular/core';
import {ApexChart, ApexStroke, ApexXAxis} from "ng-apexcharts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  chart: ApexChart = {
    height: 390,
    type: "area"
  };
  xaxis: ApexXAxis = {
    type: "datetime",
    categories: [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z"
    ]
  };
  stroke: ApexStroke = {
    curve: "smooth"
  };
  chartOptions = {
    series: [
      {
        name: "pending",
        data: [31, 40, 28, 51, 42, 109, 100]
      },
      {
        name: "approved",
        data: [11, 32, 45, 32, 34, 52, 41]
      },
      {
        name: "declined",
        data: [21, 15, 0, 50, 12, 30, 80]
      },
      {
        name: "draft",
        data: [50, 3, 10, 70, 8, 60, 50]
      }
    ],
    dataLabels: {
      enabled: false
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm"
      }
    }
  };

  public generateData(baseval: any, count: number, yrange: any) {
    let i = 0;
    const series = [];
    while (i < count) {
      const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      const y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
}
