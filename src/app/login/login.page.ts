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
      next: (res: any) => {
        if (res.status === 'success') {
          this.usuarioService.setUsuario({
            id: res.id,
            username: res.username,
            email: res.email,
            imagem: res.imagem ?? 'guest.png',
            dataN: res.dataN,
            genero: res.genero ?? ''
          });
          this.router.navigateByUrl('/principal');
        } else {
          this.erroMsg = res.msg || 'Dados incorretos';
        }
      },
      error: (err) => {
        this.erroMsg = 'Erro de conexão com o servidor';
        console.error(err);
      }
    });
  }
}
