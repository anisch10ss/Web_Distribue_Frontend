import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventsComponent } from './events.component';

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsComponent]
    });
    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // Add more test cases as needed for your specific functionality.
});
