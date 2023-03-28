import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBusrouteComponent } from './get-busroute.component';

describe('GetBusrouteComponent', () => {
  let component: GetBusrouteComponent;
  let fixture: ComponentFixture<GetBusrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetBusrouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBusrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
