import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {

  private baseUrl = 'http://localhost/autenticacao'; // Caminho da pasta PHP

  constructor(private http: HttpClient) { }

  // Método POST genérico
  post(formData: any, endpoint: string) {
    return this.http.post(`${this.baseUrl}/${endpoint}`, formData);
  }

  // Método GET genérico (opcional)
  get(url: string, params?: any) {
    return this.http.get(`${this.baseUrl}/${url}`, { params });
  }

  // Upload de arquivos (opcional)
  upload(formData: FormData, endpoint: string) {
    return this.http.post(`${this.baseUrl}/${endpoint}`, formData);
  }
}
