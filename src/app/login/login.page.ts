import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router'; 
import { AutenticacaoService } from '../service/autenticacao';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class LoginPage implements OnInit {
  public email: string = "";
  public senha: string = "";
  public erroMsg: string = "";

  constructor(
    public autenticacao: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit() {}

  logar() {
  // Limpa mensagem de erro anterior
  this.erroMsg = "";

  if (!this.email || !this.senha) {
    this.erroMsg = "Preencha e-mail e senha!";
    return;
  }

  this.autenticacao.logar(this.email, this.senha).subscribe({
    next: (_res: any) => {
      if (_res.status === 'success') {
        sessionStorage.setItem('token', _res.token);
        sessionStorage.setItem('id', _res.id);
        sessionStorage.setItem('imagem', _res.imagem ?? '');
        sessionStorage.setItem('username', _res.username);
        sessionStorage.setItem('email', _res.email);
        sessionStorage.setItem('dataN', _res.dataN);
        sessionStorage.setItem('genero', _res.genero ?? '');

        this.router.navigateByUrl('/principal');
      } else {
        // Aqui definimos a mensagem de erro que vai aparecer no app
        this.erroMsg = "Dados incorretos"; // mensagem genérica
        console.log("Erro ao logar:", _res.msg); // mantém no console para debug
      }
    },
    error: (err) => {
      this.erroMsg = "Erro de conexão com o servidor";
      console.error("Erro de conexão:", err);
    }
  });
}

}
