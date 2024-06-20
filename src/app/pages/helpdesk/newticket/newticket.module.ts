import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewticketPageRoutingModule } from './newticket-routing.module';

import { NewticketPage } from './newticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewticketPageRoutingModule
  ],
  declarations: [NewticketPage]
})
export class NewticketPageModule {}
