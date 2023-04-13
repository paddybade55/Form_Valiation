import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoutComponent } from './logout/logout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatElementsModule } from './_modules';
// import { CreditCardDirective } from './credit-card/credit-card.directive';


@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
