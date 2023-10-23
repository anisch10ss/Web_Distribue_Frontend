import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api/api.service';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-instructor-tickets',
  templateUrl: './instructor-tickets.component.html',
  styleUrls: ['./instructor-tickets.component.scss'],
})
export class InstructorTicketsComponent implements OnInit {
  public routes = routes;
  public feedbacks: any = [];
  public complaints: any = [];
  public complaintsCouponsSent: any = [];
  public all: any = [];
  public allCouponsSent: any = [];

  constructor(private DataService: DataService, private api: ApiService) {}

  ngOnInit(): void {
    this.feedbacks = [];
    this.complaints = [];
    this.all = [];
    this.allCouponsSent = [];
    this.complaintsCouponsSent = [];

    this.api.getComplaints().subscribe((res: any) => {
      console.log(res);
      res.forEach((complaint: any) => {
        this.complaints.push(complaint);
        this.all.push({
          idReclamation: complaint.idReclamation,
          type: 'reclamation',
          subject: complaint.etat,
          description: complaint.contenu,
        });        
      });
      this.complaintsCouponsSent = Array(this.complaints.length).fill(false);
    });
    this.api.getFeedbacks().subscribe((res: any) => {
      console.log(res);
      res.forEach((feedback: any) => {
        if (feedback.type === 'feedback') {
          this.feedbacks.push(feedback);
          this.all.push(feedback);
        }
      });
      this.allCouponsSent = Array(this.all.length).fill(false);
    });
  }

  sendMail(i: number) {
    console.log(i);
    this.api.complaintSendCoupon(this.complaints[i].idReclamation).subscribe((res: any) => {
      console.log("res", res);
      this.complaintsCouponsSent[i] = true;
    }, err => {
      console.log("err", err);
      this.complaintsCouponsSent[i] = true;
    });
  }
  sendMailFromAll(i: number) {
    console.log(i);
    this.api.complaintSendCoupon(this.all[i].idReclamation).subscribe((res: any) => {
      console.log("res", res);
      this.allCouponsSent[i] = true;
    }, err => {
      console.log("err", err);
      this.allCouponsSent[i] = true;
    });
  }
}
