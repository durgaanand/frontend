import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllBusOperatorsComponent } from './get-all-bus-operators.component';

describe('GetAllBusOperatorsComponent', () => {
  let component: GetAllBusOperatorsComponent;
  let fixture: ComponentFixture<GetAllBusOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllBusOperatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllBusOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
