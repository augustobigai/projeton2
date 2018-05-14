import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MaterializeModule } from 'angular2-materialize';

import { PessoasService } from "./services/pessoas.service";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterializeModule 
  ],
  providers: [
    PessoasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
