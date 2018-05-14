import { Injectable } from "@angular/core";

import { ReplaySubject } from "rxjs";

import { Pessoa } from "./../pessoa";

@Injectable()
export class PessoasService {
    private _pessoas: Pessoa [] = [];

    pessoas$: ReplaySubject<Pessoa[]> = new ReplaySubject<Pessoa[]>(1);

    constructor() {
        this.pessoas$.next(this._pessoas);        
    }

    addPessoas(pessoa: Pessoa) {
        this._pessoas.push(pessoa);

        this.pessoas$.next([...this._pessoas])
    }
}