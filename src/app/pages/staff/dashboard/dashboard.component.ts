import {Component, OnInit} from '@angular/core';
import {ApexChart, ApexStroke, ApexXAxis} from "ng-apexcharts";
import {IStaffDashboardStats} from "@lib/interfaces/istaff-dashboard-stats";
import {StaffService} from "@lib/services/staff/staff.service";
import {Notify} from "notiflix/build/notiflix-notify-aio";
import {StaffDashboardStats} from "@lib/classes/StaffDashboardStats";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pageData: IStaffDashboardStats = new StaffDashboardStats();
  chart: ApexChart = {
    height: 390,
    type: "area"
  };
  xaxis: ApexXAxis = {
    type: "category",
    categories: [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thur",
      "Fri",
      "Sat"
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

  constructor(private readonly staffService: StaffService) {
  }

  ngOnInit() {
    this.staffService.retrieveDashboardStats().subscribe((res) => {
      this.pageData = res;
    }, () => {
      Notify.failure('An error occurred')
    })
  }
}
