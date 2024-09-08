import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorWarnerComponent } from './error-warner.component';

describe('ErrorWarnerComponent', () => {
  let component: ErrorWarnerComponent;
  let fixture: ComponentFixture<ErrorWarnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorWarnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorWarnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
