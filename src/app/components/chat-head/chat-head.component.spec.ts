import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatHeadComponent } from './chat-head.component';

describe('ChatHeadComponent', () => {
  let component: ChatHeadComponent;
  let fixture: ComponentFixture<ChatHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatHeadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
