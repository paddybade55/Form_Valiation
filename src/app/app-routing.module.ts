import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCardComponent } from './add-card/add-card.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path: 'add-card',
    loadChildren: () =>
      import('./add-card/add-card.module').then(
        (m) => m.AddCardModule
      ),
  },
  {
    path: 'home-page',
    loadChildren: () =>
      import('./home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
