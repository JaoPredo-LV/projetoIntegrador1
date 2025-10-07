import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {

  private baseUrl = 'http://localhost/autenticacao'; // 🟢 caminho da pasta onde estão os PHPs

  constructor(private http: HttpClient) { }

  // Método GET genérico (caso precise)
  get(url: string, params?: any) {
    return this.http.get(`${this.baseUrl}/${url}`, { params });
  }

  // Método POST genérico
  post(formData: any, endpoint: string) {
    return this.http.post(`${this.baseUrl}/${endpoint}`, formData);
  }

  // Upload de arquivos (caso precise enviar imagem ou arquivo)
  upload(formData: FormData, endpoint: string) {
    return this.http.post(`${this.baseUrl}/${endpoint}`, formData);
  }
}
