import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnirViajePage } from './unir-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: UnirViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnirViajePageRoutingModule {}
