import { ConteudoComponent } from './views/conteudo/conteudo.component';
import { DisciplinaComponent } from './views/disciplina/disciplina.component';
import { CabecalhoComponent } from './views/cabecalho/cabecalho.component';
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
}, {
  path: "cabecalho",
  component: CabecalhoComponent
}, {
  path: "disciplina",
  component: DisciplinaComponent
}, {
  path: "conteudo",
  component: ConteudoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
