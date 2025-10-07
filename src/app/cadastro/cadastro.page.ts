import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { chevronBackOutline, home, personCircleOutline } from 'ionicons/icons';
import { RequisicaoService } from '../service/requisicao';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, IonicModule]
})
export class CadastroPage {
  public nome = '';
  public data = '';
  public peso = '';
  public altura = '';
  public genero = '';
  public email = '';
  public senha = '';
  public imagemArquivo: any = null;
  public imagemPreview: string = 'assets/default.png';
  public erroMsg = '';
  public sucessoMsg = '';

  constructor(private rs: RequisicaoService, private router: Router) {
    addIcons({ home, personCircleOutline, chevronBackOutline });
  }

  selecionarFoto() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = () => {
      if (input.files && input.files[0]) {
        this.imagemArquivo = input.files[0];
        const reader = new FileReader();
        reader.onload = e => this.imagemPreview = reader.result as string;
        reader.readAsDataURL(this.imagemArquivo);
      }
    };
    input.click();
  }

  salvar() {
    this.erroMsg = '';
    this.sucessoMsg = '';

    if (!this.nome || !this.data || !this.peso || !this.altura || !this.genero || !this.email || !this.senha) {
      this.erroMsg = 'Preencha todos os campos';
      return;
    }

    const fd = new FormData();
    fd.append('nome', this.nome);
    fd.append('data', this.data);
    fd.append('peso', this.peso);
    fd.append('altura', this.altura);
    fd.append('genero', this.genero);
    fd.append('email', this.email);
    fd.append('senha', this.senha);

    // Se o usuário escolheu uma imagem, envia o arquivo real
    if (this.imagemArquivo) {
      fd.append('imagem', this.imagemArquivo, this.imagemArquivo.name);
    } else {
      // Caso contrário, envia apenas o nome da imagem padrão
      fd.append('imagem', 'guest.png');
    }

    this.rs.post(fd, 'cadastro-usuario.php').subscribe({
      next: (res: any) => {
        if (res.status === 'success') {
          this.sucessoMsg = res.msg;
          setTimeout(() => this.router.navigate(['/questionario']), 1000);
        } else {
          this.erroMsg = res.msg;
        }
      },
      error: (err) => {
        this.erroMsg = 'Erro de conexão com o servidor.';
        console.error(err);
      }
    });
  }
}
