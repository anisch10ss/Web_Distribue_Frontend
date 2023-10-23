import { Component, AfterViewInit } from '@angular/core';
import * as FullCalendar from 'fullcalendar';
import { ApiService } from 'src/app/shared/service/api/api.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements AfterViewInit {
  showAddForm: boolean = false;
  addFormStartDate: Date = new Date();
  addFormEndDate: Date = new Date();
  addFormLieu: string = '';
  addFormHost: string = '';
  calendar: any;

  constructor(private api: ApiService) {}

  ngAfterViewInit() {
    // Initialize FullCalendar
    const calendarEl: HTMLElement | null = document.getElementById('calendar');

    this.api.getEvents().subscribe((res: any) => {
      console.log(res);
      res.forEach((event: any) => {
        this.calendar.addEvent({
          title: event.host,
          start: new Date(event.dateevent),
          end: new Date(
            new Date(event.dateevent).getTime() + (event.durée - 1) * 24 * 60 * 60 * 1000
          ),
        });
      });
    });

    if (calendarEl) {
      this.calendar = new FullCalendar.Calendar(calendarEl, {
        // Configuration options for FullCalendar go here
        // For example, you can set event sources, initial view, etc.
        selectable: true,
        events: [],
        select: (info) => {
          console.log(info);
          this.addFormStartDate = info.start;
          this.addFormEndDate = info.end;
          this.showAddForm = true;
        },
      });

      // Render the calendar
      this.calendar.render();
    } else {
      console.error('Calendar element not found');
    }
  }

  calculateDiff(datestart: Date, dateend: Date) {
    return Math.floor(
      (Date.UTC(
        datestart.getFullYear(),
        datestart.getMonth(),
        datestart.getDate()
      ) -
        Date.UTC(
          dateend.getFullYear(),
          dateend.getMonth(),
          dateend.getDate()
        )) /
        (1000 * 60 * 60 * 24)
    );
  }

  onClick(event: any) {
    // console.log(this.addFormStartDate, this.addFormEndDate, this.addFormTitle);
    this.showAddForm = false;
    // this.calendar.addEvent({
    //   title: this.addFormTitle,
    //   start: this.addFormStartDate,
    //   end: this.addFormEndDate
    // });
    let new_event = {
      dateevent: this.addFormStartDate,
      lieu: this.addFormLieu,
      durée: this.calculateDiff(this.addFormEndDate, this.addFormStartDate),
      host: this.addFormHost,
    };
    this.api.postEvent(new_event).subscribe((res: any) => {
      console.log(res);
      this.calendar.addEvent({
        title: new_event.host,
        start: new_event.dateevent,
        end: new Date(
          new_event.dateevent.getTime() + new_event.durée * 24 * 60 * 60 * 1000
        ),
      });
    });
  }

  cancelAdd() {
    this.showAddForm = false;
    console.log(this.calculateDiff(this.addFormEndDate, this.addFormStartDate),);
  }
}
