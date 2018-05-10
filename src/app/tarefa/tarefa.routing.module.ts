import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TarefaComponent } from "./tarefa.component";

const tarefaRoutes: Routes = [
    { path:'tarefa', component: TarefaComponent }
]

@NgModule({
    imports: [RouterModule.forChild(tarefaRoutes)],
    exports: [RouterModule]
})
export class TarefaRoutingModule {

}