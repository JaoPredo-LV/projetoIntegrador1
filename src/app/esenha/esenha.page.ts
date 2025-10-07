import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-esenha',
  templateUrl: './esenha.page.html',
  styleUrls: ['./esenha.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink]
})
export class ESenhaPage implements OnInit {
  public email: string = "";
  public erroMsg: string = "";
  public sucessoMsg: string = "";

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  enviarCodigo() {
    this.erroMsg = "";
    this.sucessoMsg = "";

    // Campo vazio
    if (!this.email.trim()) {
      this.erroMsg = "Preencha o campo de e-mail.";
      return;
    }

    // Verifica e-mail válido (regex)
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(this.email)) {
      this.erroMsg = "Digite um e-mail válido.";
      return;
    }

    // Chama o PHP para verificar se o e-mail existe
    this.http.post<any>('http://localhost/autenticacao/verifica_email.php', { email: this.email })
      .subscribe({
        next: res => {
          if (res.status === 'success') {
            this.sucessoMsg = "Código enviado para o seu e-mail.";
          } else {
            this.erroMsg = res.msg;
          }
        },
        error: () => this.erroMsg = "Erro de conexão."
      });
  }
}
