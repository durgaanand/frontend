import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuebyroutenameComponent } from './revenuebyroutename.component';

describe('RevenuebyroutenameComponent', () => {
  let component: RevenuebyroutenameComponent;
  let fixture: ComponentFixture<RevenuebyroutenameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenuebyroutenameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenuebyroutenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
