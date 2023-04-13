import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateCashChallanComponent } from './generate-cash-challan.component';

describe('GenerateCashChallanComponent', () => {
  let component: GenerateCashChallanComponent;
  let fixture: ComponentFixture<GenerateCashChallanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateCashChallanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateCashChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
