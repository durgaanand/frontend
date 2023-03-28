import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFeedback2Component } from './view-feedback2.component';

describe('ViewFeedback2Component', () => {
  let component: ViewFeedback2Component;
  let fixture: ComponentFixture<ViewFeedback2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFeedback2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFeedback2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
