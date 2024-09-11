import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPickFormComponent } from './add-pick-form.component';

describe('AddPickFormComponent', () => {
  let component: AddPickFormComponent;
  let fixture: ComponentFixture<AddPickFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPickFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPickFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
