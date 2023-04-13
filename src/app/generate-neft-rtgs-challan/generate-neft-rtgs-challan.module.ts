import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerateNeftRtgsChallanRoutingModule } from './generate-neft-rtgs-challan-routing.module';
import { CoreElementsModule, MatElementsModule, TopHeaderModule } from '../_modules';
import { GenerateNeftRtgsChallanComponent } from './generate-neft-rtgs-challan.component';

@NgModule({
  declarations: [
    GenerateNeftRtgsChallanComponent
  ],
  imports: [
    CommonModule,
    GenerateNeftRtgsChallanRoutingModule,
    CoreElementsModule,
    MatElementsModule,
    TopHeaderModule
  ]
})
export class GenerateNeftRtgsChallanModule { }
