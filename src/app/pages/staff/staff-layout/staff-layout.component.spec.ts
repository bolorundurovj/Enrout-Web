import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffLayoutComponent } from './staff-layout.component';

describe('StaffLayoutComponent', () => {
  let component: StaffLayoutComponent;
  let fixture: ComponentFixture<StaffLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StaffLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
