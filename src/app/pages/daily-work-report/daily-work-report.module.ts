import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyWorkReportPageRoutingModule } from './daily-work-report-routing.module';

import { DailyWorkReportPage } from './daily-work-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyWorkReportPageRoutingModule
  ],
  declarations: [DailyWorkReportPage]
})
export class DailyWorkReportPageModule {}
