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
  public imagemArquivo: File | null = null;
  public imagemPreview: string = 'assets/default.png'; // padrão
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

  // Verifica se todos os campos estão preenchidos
  if (!this.nome || !this.data || !this.peso || !this.altura || !this.genero || !this.email || !this.senha) {
    this.erroMsg = 'Preencha todos os campos';
    return;
  }

  // Valida e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(this.email)) {
    this.erroMsg = 'E-mail inválido';
    return;
  }

  // Valida peso e altura (números positivos)
  if (isNaN(+this.peso) || +this.peso <= 0) {
    this.erroMsg = 'Peso inválido';
    return;
  }
  if (isNaN(+this.altura) || +this.altura <= 0) {
    this.erroMsg = 'Altura inválida';
    return;
  }

  // Valida senha (mínimo 8 caracteres)
  if (this.senha.length < 8) {
    this.erroMsg = 'Senha deve ter pelo menos 8 caracteres';
    return;
  }

  // Preparar FormData
  const fd = new FormData();
  fd.append('nome', this.nome);
  fd.append('data', this.data);
  fd.append('peso', this.peso);
  fd.append('altura', this.altura);
  fd.append('genero', this.genero);
  fd.append('email', this.email);
  fd.append('senha', this.senha);

  if (this.imagemArquivo) {
    fd.append('imagem', this.imagemArquivo, this.imagemArquivo.name);
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
