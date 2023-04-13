import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  exports: [
    FlexLayoutModule,
    HttpClientModule
  ]
})
export class CoreElementsModule { }
