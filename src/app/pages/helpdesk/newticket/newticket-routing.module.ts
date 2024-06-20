import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewticketPage } from './newticket.page';

const routes: Routes = [
  {
    path: '',
    component: NewticketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewticketPageRoutingModule {}
