import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnirViajePageRoutingModule } from './unir-viaje-routing.module';

import { UnirViajePage } from './unir-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnirViajePageRoutingModule
  ],
  declarations: [UnirViajePage]
})
export class UnirViajePageModule {}
