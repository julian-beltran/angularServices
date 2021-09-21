import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { CiudadComponent } from './pages/ciudad/ciudad.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {path: 'inicio' , component: InicioComponent}, 
  {path: 'buscar', component: BuscarComponent},
  {path: 'ciudad', component: CiudadComponent},
  {path: '**' , component: InicioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
