import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { chevronBackOutline, personCircleOutline } from 'ionicons/icons';
import { Router, RouterLink } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, CommonModule, FormsModule]
})
export class InfoPage implements OnInit {
  usuario: any = {}; // objeto com todos os dados
  imagemUsuario: string = 'default.png'; // imagem padrão

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    addIcons({ chevronBackOutline, personCircleOutline });
  }

  ngOnInit() {
    // Puxa os dados da sessão do login
    this.usuario = {
      nome: sessionStorage.getItem('username') || 'Usuário',
      email: sessionStorage.getItem('email') || '',
      dataN: sessionStorage.getItem('dataN') || '',
      genero: sessionStorage.getItem('genero') || '',
      imagem: sessionStorage.getItem('imagem') || 'default.png'
    };

    this.imagemUsuario = this.usuario.imagem;
  }

  voltar() {
    this.router.navigate(['/principal']);
  }
  onImageError(event: Event) {
  const img = event.target as HTMLImageElement;
  img.src = 'assets/default.png';
}
}
