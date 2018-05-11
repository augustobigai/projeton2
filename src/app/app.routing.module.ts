import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
    { path:'pessoa', loadChildren: './pessoa/pessoa.module#PessoaModule' },
    { path: 'alocacao', loadChildren: './alocacao/alocacao.module#AlocacaoModule' },
    { path: 'tarefa', loadChildren: './tarefa/tarefa.module#TarefaModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule ({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}