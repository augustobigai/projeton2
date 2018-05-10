import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PessoaComponent } from './pessoa/pessoa.component';
import { TarefaComponent } from './tarefa/tarefa.component';
import { AlocacaoComponent } from './alocacao/alocacao.component';

const appRoutes: Routes = [
    { path:'', component: PessoaComponent },
    { path:'pessoa', component: PessoaComponent },
    { path:'tarefa', component: TarefaComponent },
    { path:'alocacao', component: AlocacaoComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule ({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}