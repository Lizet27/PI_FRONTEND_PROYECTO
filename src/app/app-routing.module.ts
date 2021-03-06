import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddConsultaComponent } from './components/add-consulta/add-consulta.component';
import { AddProductoComponent } from './components/add-producto/add-producto.component';


const routes: Routes = [
  {path:"addConsulta", component:AddConsultaComponent },
  {path:"addProducto", component:AddProductoComponent}
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
