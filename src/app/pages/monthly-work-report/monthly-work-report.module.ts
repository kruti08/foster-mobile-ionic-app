import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonthlyWorkReportPageRoutingModule } from './monthly-work-report-routing.module';

import { MonthlyWorkReportPage } from './monthly-work-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonthlyWorkReportPageRoutingModule
  ],
  declarations: [MonthlyWorkReportPage]
})
export class MonthlyWorkReportPageModule {}
