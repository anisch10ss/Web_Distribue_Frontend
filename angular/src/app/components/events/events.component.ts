import { Component, AfterViewInit } from '@angular/core';
import * as FullCalendar from 'fullcalendar';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Initialize FullCalendar
    const calendarEl: HTMLElement | null = document.getElementById('calendar');
  
    if (calendarEl) {
      const calendar = new FullCalendar.Calendar(calendarEl, {
        // Configuration options for FullCalendar go here
        // For example, you can set event sources, initial view, etc.
        events: [
          {
            title: 'Meeting',       // Event title
            start: '2023-10-10T10:00:00', // Event start time (in ISO format)
            end: '2023-10-10T12:00:00'   // Event end time (in ISO format)
          },
          {
            title: 'Conference',
            start: '2023-10-08T14:00:00',
            end: '2023-10-11T16:00:00'
          },
          {
            title: 'Event 3',
            start: '2023-10-12T09:30:00',
            end: '2023-10-12T11:00:00'
          },
          {
            title: 'Event 4',
            start: '2023-10-13T16:00:00',
            end: '2023-10-13T17:30:00'
          },
          {
            title: 'Event 5',
            start: '2023-10-14T13:00:00',
            end: '2023-10-14T14:30:00'
          },
          // Add more static events as needed
        ],
      });
  
      // Render the calendar
      calendar.render();
    } else {
      console.error("Calendar element not found");
    }
  }
  
}
