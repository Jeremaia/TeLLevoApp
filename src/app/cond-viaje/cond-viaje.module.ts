import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CondViajePageRoutingModule } from './cond-viaje-routing.module';

import { CondViajePage } from './cond-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CondViajePageRoutingModule
  ],
  declarations: [CondViajePage]
})
export class CondViajePageModule {}
