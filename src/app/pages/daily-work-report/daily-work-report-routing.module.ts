import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyWorkReportPage } from './daily-work-report.page';

const routes: Routes = [
  {
    path: '',
    component: DailyWorkReportPage
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyWorkReportPageRoutingModule {}
