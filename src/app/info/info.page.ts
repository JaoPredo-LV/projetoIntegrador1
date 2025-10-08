import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { chevronBackOutline, personCircleOutline } from 'ionicons/icons';
import { RouterLink } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, CommonModule, FormsModule]
})
export class InfoPage implements OnInit {
  
  imagemUsuario: string = 'guest.png';

  usuario = {
    nome: sessionStorage.getItem('username')
  }
  email = {
    email: sessionStorage.getItem('email')
  }

  date = {
    dataN: sessionStorage.getItem('dataN')
  }

  genero = {
    genero: sessionStorage.getItem('genero')
  }
  srcImage = {
    srcImage: sessionStorage.getItem('imagem')
  }
  constructor(private usuarioService: UsuarioService,private location: Location) { 
    addIcons({chevronBackOutline, personCircleOutline})
  }

  ngOnInit() {
    this.imagemUsuario = this.usuarioService.getImagemUsuario();
  }
  voltar() {
    this.location.back();
  }
}
