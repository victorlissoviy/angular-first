import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPhoneComponent } from './car-phone.component';

describe('CarPhoneComponent', () => {
  let component: CarPhoneComponent;
  let fixture: ComponentFixture<CarPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarPhoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
