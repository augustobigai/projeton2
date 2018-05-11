import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PessoaComponent } from "./pessoa.component";

const pessoaRoutes: Routes = [
    { path:'', component: PessoaComponent }
]

@NgModule({
    imports: [RouterModule.forChild(pessoaRoutes)],
    exports: [RouterModule]
})
export class PessoaRoutingModule {

}