import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  PORFOLIO_URL = "http://localhost:8091/api/portfolios";
  RECLAMATION_URL = "http://localhost:8082/reclamation";
  FEEDBACK_URL = "http://localhost:8081/feedback";
  FORUM_URL = "http://localhost:9096/Forum/Post";
  EVENT_URL = "http://localhost:9090/events";
  MEETING_URL = "http://localhost:9091/reunions";
  ANALYTIC_URL = "http://localhost:9099/analytics";
  SERVICE_URL = "http://localhost:8031/prestations";
  SERVICE_ORDERS_URL = "http://localhost:8031/service-orders";

  constructor(private http: HttpClient) {}

  getPortfolios() {
    return this.http.get<any>(this.PORFOLIO_URL + "/")
  }

  getServices() {
    return this.http.get<any>(this.SERVICE_URL + "/AllPrestations")
  }

  getServiceOrders() {
    return this.http.get<any>(this.SERVICE_ORDERS_URL + "/list-serviceorder")
  }

  postServiceOrder() {
    let futureDate = new Date(Date.now() - Math.floor(Math.random() * 1000000000));
    return this.http.post<any>(this.SERVICE_ORDERS_URL + "/add-serviceorder", { status: 0, orderDate: futureDate.toISOString().split('T')[0] })
  }

  getAnalytics() {
    return this.http.get<any>(this.ANALYTIC_URL)
  }

  postFeedback(data: { subject: string; description: string; type: string; }) {
    return this.http.post<any>(this.FEEDBACK_URL + "/feedback", { ...data, idcreationDate: new Date(), users: [{ userId: 1 }] })
  }

  postComplaint(data: { contenu: string }) {
    return this.http.post<any>(this.RECLAMATION_URL, { ...data, date: new Date(), etat: "open" })
  }

  complaintSendCoupon(id: any) {
    return this.http.post<any>(this.RECLAMATION_URL + "/sendCoupon/" + id, {})
  }

  getComplaints() {
    return this.http.get<any>(this.RECLAMATION_URL)
  }
  
  getFeedbacks() {
    return this.http.get<any>(this.FEEDBACK_URL)
  }

  getPosts() {
    return this.http.get<any>(this.FORUM_URL + "/listPosts")
  }

  getMeetings() {
    return this.http.get<any>(this.MEETING_URL + "/retrieveall")
  }

  postMeeting(data: { dateReunion: Date; location: string; agenda: string; }) {
    return this.http.post<any>(this.MEETING_URL, { ...data })

  }
  putMeeting(id: any, data: { dateReunion: Date; location: string; agenda: string; }) {
    return this.http.put<any>(this.MEETING_URL + "/update/" + id, { ...data })

  }

  deleteMeeting(id: any) {
    return this.http.delete<any>(this.MEETING_URL + "/delete/" + id)
  }

  getEvents() {
    return this.http.get<any>(this.EVENT_URL)
  }

  postEvent(data: { dateevent: Date; lieu: string; durée: number; host: string; }) {
    return this.http.post<any>(this.EVENT_URL, { ...data })

  }

}
