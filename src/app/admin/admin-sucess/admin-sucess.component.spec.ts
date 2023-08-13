import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSucessComponent } from './admin-sucess.component';

describe('AdminSucessComponent', () => {
  let component: AdminSucessComponent;
  let fixture: ComponentFixture<AdminSucessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSucessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
