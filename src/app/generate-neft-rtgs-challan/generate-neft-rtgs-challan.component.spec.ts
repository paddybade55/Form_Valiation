import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateNeftRtgsChallanComponent } from './generate-neft-rtgs-challan.component';

describe('GenerateRtgsChallanComponent', () => {
  let component: GenerateNeftRtgsChallanComponent;
  let fixture: ComponentFixture<GenerateNeftRtgsChallanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateNeftRtgsChallanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateNeftRtgsChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
