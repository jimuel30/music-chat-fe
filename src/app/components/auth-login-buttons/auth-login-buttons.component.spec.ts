import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLoginButtonsComponent } from './auth-login-buttons.component';

describe('AuthLoginButtonsComponent', () => {
  let component: AuthLoginButtonsComponent;
  let fixture: ComponentFixture<AuthLoginButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthLoginButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthLoginButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
