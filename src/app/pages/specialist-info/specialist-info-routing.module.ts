
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecialistInfoPage } from './specialist-info.page';

const routes: Routes = [
  {
    path: '',
    component: SpecialistInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecialistInfoPageRoutingModule {}
