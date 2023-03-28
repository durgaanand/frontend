import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRevenuebyroutenameComponent } from './get-revenuebyroutename.component';

describe('GetRevenuebyroutenameComponent', () => {
  let component: GetRevenuebyroutenameComponent;
  let fixture: ComponentFixture<GetRevenuebyroutenameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetRevenuebyroutenameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRevenuebyroutenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
