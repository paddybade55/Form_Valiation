import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateChequeChallanComponent } from './generate-cheque-challan.component';

describe('GenerateChequeChallanComponent', () => {
  let component: GenerateChequeChallanComponent;
  let fixture: ComponentFixture<GenerateChequeChallanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateChequeChallanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateChequeChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
