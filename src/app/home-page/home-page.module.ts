import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { MatElementsModule } from '../_modules';


@NgModule({
  declarations: [ HomePageComponent ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    MatElementsModule
  ]
})
export class HomePageModule { }
