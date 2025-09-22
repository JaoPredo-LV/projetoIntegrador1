import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonLabel, IonItem, IonList, IonText, IonButton, IonInputPasswordToggle } from '@ionic/angular/standalone';
import { Router } from '@angular/router'; // ✅ Import Router
import { AutenticacaoService } from '../service/autenticacao';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, 
    IonInput, IonLabel, IonItem, IonList, 
    IonText, IonButton, CommonModule, FormsModule, 
    IonInputPasswordToggle
  ]
})
export class LoginPage implements OnInit {
  public email: string = "";
  public senha: string = "";

  constructor(
    public autenticacao: AutenticacaoService,
    private router: Router // ✅ Injeta Router
  ) {}

  ngOnInit() {}

  logar() {
    const email = this.email;
    const senha = this.senha;

    this.autenticacao.logar(email, senha).subscribe((_res: any) => {
      if (_res.status === 'success') {
        // ✅ Salva token
        sessionStorage.setItem('token', _res.token);
        sessionStorage.setItem('id',_res.id)
        sessionStorage.setItem('username', _res.username);
        sessionStorage.setItem('email', _res.email);
        sessionStorage.setItem('dataN', _res.dataN);
        sessionStorage.setItem('genero', _res.genero);

        // ✅ Redireciona para Questionário
        this.router.navigate(['/questionario']);
      } else {
        // ❌ Erro na autenticação
        console.log("Erro ao logar:", _res.message);
      }
    });
  }
}


