import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackhomeComponent } from './feedbackhome.component';

describe('FeedbackhomeComponent', () => {
  let component: FeedbackhomeComponent;
  let fixture: ComponentFixture<FeedbackhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
