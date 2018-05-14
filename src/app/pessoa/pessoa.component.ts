import { PessoasService } from "./../services/pessoas.service";

import { Observable } from "rxjs";

import { Pessoa } from "./../pessoa";
import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css'],
  providers: [FormBuilder]
})

export class PessoaComponent {
  _form: FormGroup;
  pessoas$: Observable<Pessoa[]>;

  constructor(private _fb: FormBuilder, private _pessoasService: PessoasService) {
      this._form = this._fb.group({
        nome: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
      });
      
      this.pessoas$ = this._pessoasService.pessoas$.asObservable();
  }  

  AddListaPessoas(){
  }

  _adicionar() {
    const pessoa: Pessoa = {
    ...this._form.value,
  };
  this._pessoasService.addPessoas(pessoa);
  }
}


