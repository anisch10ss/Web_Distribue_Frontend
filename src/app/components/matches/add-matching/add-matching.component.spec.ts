import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMatchingComponent } from './add-matching.component';

describe('AddMatchingComponent', () => {
  let component: AddMatchingComponent;
  let fixture: ComponentFixture<AddMatchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMatchingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
