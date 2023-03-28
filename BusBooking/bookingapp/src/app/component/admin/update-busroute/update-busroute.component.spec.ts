import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBusrouteComponent } from './update-busroute.component';

describe('UpdateBusrouteComponent', () => {
  let component: UpdateBusrouteComponent;
  let fixture: ComponentFixture<UpdateBusrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBusrouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBusrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
