import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ingreso-usuario',
    loadChildren: () => import('./ingreso-usuario/ingreso-usuario.module').then( m => m.IngresoUsuarioPageModule)
  },
  {
    path: 'recup-contra',
    loadChildren: () => import('./recup-contra/recup-contra.module').then( m => m.RecupContraPageModule)
  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./bienvenida/bienvenida.module').then( m => m.BienvenidaPageModule)
  },  {
    path: 'cond-viaje',
    loadChildren: () => import('./cond-viaje/cond-viaje.module').then( m => m.CondViajePageModule)
  },
  {
    path: 'unir-viaje',
    loadChildren: () => import('./unir-viaje/unir-viaje.module').then( m => m.UnirViajePageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
