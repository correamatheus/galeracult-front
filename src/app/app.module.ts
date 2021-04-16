import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DocumentosComponent } from './views/documentos/documentos.component';
import { PreleituraComponent } from './views/preleitura/preleitura.component';
import { LeitorComponent } from './views/leitor/leitor.component';
import { PosleituraComponent } from './views/posleitura/posleitura.component';
import { CabecalhoComponent } from './views/cabecalho/cabecalho.component';
import { DisciplinaComponent } from './views/disciplina/disciplina.component';
import { ConteudoComponent } from './views/conteudo/conteudo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    DocumentosComponent,
    PreleituraComponent,
    LeitorComponent,
    PosleituraComponent,
    CabecalhoComponent,
    DisciplinaComponent,
    ConteudoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    NgxNavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
