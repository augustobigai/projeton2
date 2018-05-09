import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PessoaComponent } from './pessoa/pessoa.component';
import { TarefaComponent } from './tarefa/tarefa.component';
import { AlocacaoComponent } from './alocacao/alocacao.component'


const APP_ROUTES: Routes = [
    { path:'', component: PessoaComponent },
    { path:'pessoa', component: PessoaComponent },
    { path:'tarefa', component: TarefaComponent },
    { path:'alocacao', component: AlocacaoComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);