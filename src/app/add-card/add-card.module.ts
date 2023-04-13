import { MatElementsModule } from './../_modules/mat-elements.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCardRoutingModule } from './add-card-routing.module';
import { AddCardComponent } from './add-card.component';
// import { CreditCardDirective } from '../credit-card/credit-card.directive';


@NgModule({
  declarations: [
    AddCardComponent,
    // CreditCardDirective
  ],
  imports: [
    CommonModule,
    AddCardRoutingModule,
    MatElementsModule,

  ]
})
export class AddCardModule { }
