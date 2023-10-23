import { Component, OnInit, ViewChild } from '@angular/core';
import {ChartComponent,ApexAxisChartSeries,ApexChart,ApexXAxis,ApexDataLabels,ApexTooltip,ApexStroke,ApexPlotOptions,ApexLegend,ApexYAxis,ApexFill,ApexGrid,ApexMarkers} from "ng-apexcharts";
import { ApiService } from 'src/app/shared/service/api/api.service';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';
export type ChartOptions = {
  series: ApexAxisChartSeries |any;
  chart: ApexChart |any;
  xaxis: ApexXAxis |any;
  yaxis: ApexYAxis |any;
  stroke: ApexStroke |any;
  tooltip: ApexTooltip |any;
  dataLabels: ApexDataLabels |any;
  plotOptions: ApexPlotOptions |any;
  fill: ApexFill |any;
  legend: ApexLegend |any;
  grid: ApexGrid |any;
  markers: ApexMarkers |any;
};

@Component({
  selector: 'app-analytics-dashboard',
  templateUrl: './analytics-dashboard.component.html',
  styleUrls: ['./analytics-dashboard.component.scss']
})
export class AnalyticsDashboardComponent implements OnInit {
  public routes = routes;
  @ViewChild("chart") chart!: ChartComponent;
  public Areachart!: Partial<ChartOptions>;
  public ColumnCharts!: Partial<ChartOptions>;
  public bestSellingCourses : any = [];

  public analytics: any = [];

  constructor(private DataService: DataService, private api: ApiService) {
    this.bestSellingCourses = this.DataService.bestSellingCourses;
    }

  ngOnInit(): void {
    this.api.getAnalytics().subscribe((res: any) => {
      console.log(res);
      this.analytics = res;
    });
    this.Areachart = {
      series: [
        {
          name: "Current month",
				  data: [0, 10, 40, 43, 40, 25, 35, 25, 40, 30],
          color: "#FF9364"
        },
      ],
      chart: {
        height: 300,
        type: "area",
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
      },
      markers: {
        size: 3,
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
       },
       grid: {
        show: false,
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      xaxis: {
        categories: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      yaxis: {
        axisBorder: {
          show: true,
        },
      },
    };
    this.ColumnCharts = {
      series: [
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
          color: "#1D9CFD"
        },
      ],
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "20%",
          borderRadius: 7
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
      },
      fill: {
        opacity: 1
      },
      grid: {
        show: false,
      },
    };
  }

 public generateData(baseval: number, count: number, yrange: { max: number; min: number; }) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

}
