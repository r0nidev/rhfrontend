import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarComponent } from './Empleado/agregar/agregar.component';
import { EditarComponent } from './Empleado/editar/editar.component';
import { ListarComponent } from './Empleado/listar/listar.component';

const routes: Routes = [
  {path: 'listar', component:ListarComponent},
  {path: 'agregar', component:AgregarComponent},
  {path: 'editar', component:EditarComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
