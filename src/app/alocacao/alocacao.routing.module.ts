import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlocacaoComponent } from "./alocacao.component";

const appAlocacao: Routes = [
    { path:"alocacao", component: AlocacaoComponent }
]

@NgModule ({
    imports: [RouterModule.forChild(appAlocacao)],
    exports: [RouterModule]
})
export class AlocacaoRoutingModule {

}