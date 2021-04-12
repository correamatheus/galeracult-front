import { PosleituraComponent } from './views/posleitura/posleitura.component';
import { LeitorComponent } from './views/leitor/leitor.component';
import { PreleituraComponent } from './views/preleitura/preleitura.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocumentosComponent } from './views/documentos/documentos.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "login",
  component: LoginComponent
}, {
  path: "documentos",
  component: DocumentosComponent
}, {
  path: "preleitura",
  component: PreleituraComponent
}, {
  path: "leitor",
  component: LeitorComponent
}, {
  path: "posleitura",
  component: PosleituraComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
