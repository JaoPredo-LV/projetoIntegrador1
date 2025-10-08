import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../service/autenticacao';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class LoginPage {
  public email = '';
  public senha = '';
  public erroMsg = '';

  constructor(private autenticacao: AutenticacaoService, private router: Router, private usuarioService: UsuarioService) {}

  logar() {
    this.erroMsg = '';
    if (!this.email || !this.senha) {
      this.erroMsg = 'Preencha e-mail e senha!';
      return;
    }

    this.autenticacao.logar(this.email, this.senha).subscribe({
  next: (_res: any) => {
    if (_res.status === 'success') {
      // salva os dados no sessionStorage
      sessionStorage.setItem('token', _res.token);
      sessionStorage.setItem('id', _res.id);
      sessionStorage.setItem('username', _res.username);
      sessionStorage.setItem('email', _res.email);
      sessionStorage.setItem('dataN', _res.dataN);
      sessionStorage.setItem('genero', _res.genero ?? '');
      sessionStorage.setItem('imagem', _res.imagem ?? 'guest.png');

      this.router.navigateByUrl('/principal');
    } else {
      this.erroMsg = 'Dados incorretos';
    }
  },
  error: (err) => {
    this.erroMsg = 'Erro de conexão com o servidor.';
    console.error(err);
  }
});
}
}