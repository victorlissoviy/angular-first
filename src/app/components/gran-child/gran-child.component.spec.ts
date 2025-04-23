import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GranChildComponent } from './gran-child.component';

describe('GranChildComponent', () => {
  let component: GranChildComponent;
  let fixture: ComponentFixture<GranChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GranChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GranChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
