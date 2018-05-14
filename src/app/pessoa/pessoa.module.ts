import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaComponent } from './pessoa.component';
import { PessoaRoutingModule } from './pessoa.routing.module';

@NgModule ({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        PessoaRoutingModule
    ],
    exports: [],
    declarations: [
        PessoaComponent
    ],
    providers: [ReactiveFormsModule]
})
export class PessoaModule {

}
