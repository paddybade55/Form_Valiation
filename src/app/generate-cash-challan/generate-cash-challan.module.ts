import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerateCashChallanRoutingModule } from './generate-cash-challan-routing.module';
import { CoreElementsModule, MatElementsModule, TopHeaderModule } from '../_modules';
import { GenerateCashChallanComponent } from './generate-cash-challan.component';

@NgModule({
  declarations: [ GenerateCashChallanComponent ],
  imports: [
    CommonModule,
    GenerateCashChallanRoutingModule,
    CoreElementsModule,
    MatElementsModule,
    TopHeaderModule
  ]
})
export class GenerateCashChallanModule { }
