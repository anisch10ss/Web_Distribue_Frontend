import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchingComponent } from './matching.component';

describe('MatchingComponent', () => {
  let component: MatchingComponent;
  let fixture: ComponentFixture<MatchingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchingComponent]
    });
    fixture = TestBed.createComponent(MatchingComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // Add more test cases as needed to test the behavior of your MatchingComponent.
});
