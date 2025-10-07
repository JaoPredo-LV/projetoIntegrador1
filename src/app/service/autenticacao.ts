import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private apiUrl = 'http://localhost/autenticacao/logar.php';

  constructor(private http: HttpClient) {}

  logar(email: string, senha: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { email, senha });
  }
  enviarEmail(email: string): Observable<any> {
  return this.http.post<any>('http://localhost/seu_projeto/verifica_email.php', { email });
}
}
