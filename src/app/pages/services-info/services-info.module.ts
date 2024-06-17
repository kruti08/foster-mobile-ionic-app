
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicesInfoPageRoutingModule } from './services-info-routing.module';

import { ServicesInfoPage } from './services-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicesInfoPageRoutingModule
  ],
  declarations: [ServicesInfoPage]
})
export class ServicesInfoPageModule {}
