import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaComponent } from './pessoa.component';
import { PessoaRoutingModule } from './pessoa.routing.module';

@NgModule ({
    imports: [
        CommonModule,
        PessoaRoutingModule
    ],
    exports: [],
    declarations: [
        PessoaComponent
    ],
    providers: []
})
export class PessoaModule {

}