import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTvComponent } from './car-tv.component';

describe('CarTvComponent', () => {
  let component: CarTvComponent;
  let fixture: ComponentFixture<CarTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarTvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
