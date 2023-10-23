import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api/api.service';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';
@Component({
  selector: 'app-instructor-orders',
  templateUrl: './instructor-orders.component.html',
  styleUrls: ['./instructor-orders.component.scss'],
})
export class InstructorOrdersComponent implements OnInit {
  public routes = routes;
  public orders: any = [];
  public pending_orders: any = [];
  public completed_orders: any = [];

  services: any = [];

  constructor(private DataService: DataService, private api: ApiService) {
    this.orders = this.DataService.orders;
  }

  ngOnInit(): void {
    this.orders = [];
    this.pending_orders = [];
    this.completed_orders = [];

    this.api.getServices().subscribe((res: any) => {
      console.log(res);
      res.forEach((service: any) => {
        this.services.push(service);
      });
      this.getServiceOrders();
    });
  }

  getServiceOrders(): void {
    this.api.getServiceOrders().subscribe((res: any) => {
      console.log(res);
      res.forEach((order: any) => {
        let random_service =
          this.services[Math.floor(Math.random() * this.services.length)];
        let o = {
          ...order,
          type: random_service.type,
          description: random_service.description,
          tarification: random_service.tarification,
        };
        if (order.status === 'PENDING') {
          this.pending_orders.push(o);
        } else {
          this.completed_orders.push(o);
        }
        this.orders.push(o);
      });
    });
  }
}
