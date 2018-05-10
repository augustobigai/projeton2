import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TarefaComponent } from "./tarefa.component";
import { TarefaRoutingModule } from "./tarefa.routing.module";

@NgModule ({
    imports: [
        CommonModule,
        TarefaRoutingModule
    ],
    exports: [],
    declarations: [
        TarefaComponent
    ],
    providers: []
})
export class TarefaModule {

}