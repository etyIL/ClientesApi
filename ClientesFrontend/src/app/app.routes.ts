import { Routes } from '@angular/router';
import { FormularioAltaComponent } from './formulario-alta/formulario-alta.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



export const routes: Routes = [{ path: '', redirectTo: 'formulario', pathMatch: 'full' },
  { path: '', component: FormularioAltaComponent },
  { path: 'clientes', component: ListaClientesComponent }
];



