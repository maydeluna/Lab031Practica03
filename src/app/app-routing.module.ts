import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AltaClienteComponent } from './clientes/alta-cliente/alta-cliente.component';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';

const routes : Routes =[
  {path:'altaClientes', component: AltaClienteComponent},
  {path:'listadoClientes', component: ListadoClientesComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
