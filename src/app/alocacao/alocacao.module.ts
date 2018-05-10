import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AlocacaoComponent } from "./alocacao.component";
import { AlocacaoRoutingModule } from "./alocacao.routing.module";


@NgModule ({
    imports: [
        CommonModule,
        AlocacaoRoutingModule
    ],
    exports: [],
    declarations: [
        AlocacaoComponent
    ],
    providers: []
})
export class AlocacaoModule {

}