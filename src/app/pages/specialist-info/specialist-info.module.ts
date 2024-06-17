
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecialistInfoPageRoutingModule } from './specialist-info-routing.module';

import { SpecialistInfoPage } from './specialist-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecialistInfoPageRoutingModule
  ],
  declarations: [SpecialistInfoPage]
})
export class SpecialistInfoPageModule {}
