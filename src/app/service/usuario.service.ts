import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() {}

  setUsuario(usuario: any) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  getUsuario() {
    const user = localStorage.getItem('usuario');
    return user ? JSON.parse(user) : null;
  }

  getImagemUsuario() {
    const user = this.getUsuario();
    return user ? user.imagem : 'guest.png';
  }
}
