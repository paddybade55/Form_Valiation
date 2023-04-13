import { GenerateNeftRtgsChallanComponent } from './generate-neft-rtgs-challan.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    component : GenerateNeftRtgsChallanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerateNeftRtgsChallanRoutingModule { }
