import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSucessComponent } from './user-sucess.component';

describe('UserSucessComponent', () => {
  let component: UserSucessComponent;
  let fixture: ComponentFixture<UserSucessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSucessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
