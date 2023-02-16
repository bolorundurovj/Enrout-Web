import {Component, OnInit} from '@angular/core';
import {ApexChart, ApexStroke, ApexXAxis} from "ng-apexcharts";
import {IStaffDashboardStats} from "@lib/interfaces/istaff-dashboard-stats";
import {StaffDashboardStats} from "@lib/classes/StaffDashboardStats";
import {StudentService} from "@lib/services/student/student.service";
import {Notify} from "notiflix/build/notiflix-notify-aio";

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

  constructor(private readonly studentService: StudentService) {
  }

  ngOnInit() {
    this.studentService.retrieveDashboardStats().subscribe((res) => {
      this.pageData = res;
    }, () => {
      Notify.failure('An error occurred')
    })
  }

  calcPercent(value: number) {
    return Number(value / this.pageData.submissions) * 100
  }
}
