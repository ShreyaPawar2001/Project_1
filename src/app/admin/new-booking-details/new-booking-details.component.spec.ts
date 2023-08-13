import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBookingDetailsComponent } from './new-booking-details.component';

describe('NewBookingDetailsComponent', () => {
  let component: NewBookingDetailsComponent;
  let fixture: ComponentFixture<NewBookingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBookingDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
