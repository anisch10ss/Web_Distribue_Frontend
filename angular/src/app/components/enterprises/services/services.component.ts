import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Sort } from '@angular/material/sort';
import { ApiService } from 'src/app/shared/service/api/api.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  public routes = routes;
  public services: any = [];
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'type',
    'description',
    'tarification',
    "actions"
  ];
  searchDataValue = '';
  serviceOrdersMessage: boolean[] = [];
  loadingMessages: boolean[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.services = [];
    this.serviceOrdersMessage = [];
    this.loadingMessages = [];
    this.api.getServices().subscribe((res: any) => {
      console.log(res);
      res.forEach((service: any) => {
        this.services.push(service);
      });
      this.serviceOrdersMessage = Array(this.services.length).fill(false);
      this.loadingMessages = Array(this.services.length).fill(false);
      this.dataSource = new MatTableDataSource<any>(this.services);
    });
    // Initialize static services
    // this.services = [
    //   {
    //     name: 'Service 1',
    //     enterprise_name: 'Enterprise A',
    //     service_type: 'Type A',
    //     price: 50
    //   },
    //   {
    //     name: 'Service 2',
    //     enterprise_name: 'Enterprise B',
    //     service_type: 'Type B',
    //     price: 60
    //   },
    //   {
    //     name: 'Service 3',
    //     enterprise_name: 'Enterprise C',
    //     service_type: 'Type A',
    //     price: 70
    //   },
    //   // Add more static services here
    // ];

    // Initialize data source
    this.dataSource = new MatTableDataSource<any>(this.services);
  }

  public sortData(sort: Sort) {
    const data = this.services.slice();

    if (!sort.active || sort.direction === '') {
      this.services = data;
    } else {
      this.services = data.sort((a: any, b: any) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  public searchData(value: any): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.services = this.dataSource.filteredData;
  }

  orderService(i: number) {
    console.log(i);
    this.loadingMessages[i] = true;
    this.api.postServiceOrder().subscribe((res: any) => {
      console.log(res);
      this.loadingMessages[i] = false;
      this.serviceOrdersMessage[i] = true;
    });
  }
}
