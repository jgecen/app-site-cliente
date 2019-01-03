import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

import { Pessoa } from '../services/pessoa';
import { ConfigService } from './config.services'

@Injectable()
export class PessoaService {

  private baseUrl:string ='';

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ){

    this.baseUrl = config.getUrlService() + '/pessoa/';


  }
  //Lista de pessoas
  getPessoas(){
    return this.http.get<any[]>(this.baseUrl);
  }

  //
  addPessoa(pessoa: Pessoa){
    return this.http.post<any>(this.baseUrl, pessoa, httpOptions);
  }

  excluirPessoa(id:number){
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(url);

  }

  getPessoa(id:number){
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<any>(url);
  }

  atualizarPessoa(pessoa:Pessoa){
    return this.http.put<any>(this.baseUrl, pessoa, httpOptions);
  }
}
