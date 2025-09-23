import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {

  constructor(
    public http:HttpClient
  ) { }

  get(dados:any){
    return this.http.get('/requisicao',{
      params:dados
    });
  }

  post(formData:any){
    const HttpOptions = {
      headers: new HttpHeaders ({
        'Access-Control-Allow-Origin' : '*'
      })
    }
    return this.http.post('/requisicao', formData, HttpOptions)
  }

  uploaded(formData:any,params?:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin' : '*'
      })      
    };
    return this.http.post('/upload',formData,httpOptions);
  }  
}