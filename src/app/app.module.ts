import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AlocacaoModule } from './alocacao/alocacao.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { TarefaModule } from './tarefa/tarefa.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AlocacaoModule,
    PessoaModule,
    TarefaModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
