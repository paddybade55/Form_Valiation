import { GenerateChequeChallanComponent } from './generate-cheque-challan.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    component : GenerateChequeChallanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerateChequeChallanRoutingModule { }
