import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerateChequeChallanRoutingModule } from './generate-cheque-challan-routing.module';
import { CoreElementsModule, MatElementsModule, TopHeaderModule } from '../_modules';
import { GenerateChequeChallanComponent } from './generate-cheque-challan.component';

@NgModule({
  declarations: [
    GenerateChequeChallanComponent
  ],
  imports: [
    CommonModule,
    GenerateChequeChallanRoutingModule,
    CoreElementsModule,
    MatElementsModule,
    TopHeaderModule
  ]
})
export class GenerateChequeChallanModule { }
