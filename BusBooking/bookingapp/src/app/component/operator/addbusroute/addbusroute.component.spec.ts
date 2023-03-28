import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbusrouteComponent } from './addbusroute.component';

describe('AddbusrouteComponent', () => {
  let component: AddbusrouteComponent;
  let fixture: ComponentFixture<AddbusrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbusrouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbusrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
