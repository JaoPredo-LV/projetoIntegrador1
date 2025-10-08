import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RequisicaoService } from '../service/requisicao';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class ConfigPage implements OnInit {
  @ViewChild('inputFile') input!: ElementRef;

  nome: string = '';
  genero: string = '';
  email: string = '';
  dataN: string = '';

  srcImage: string = 'assets/default.png'; // imagem padrão
  selectedFile!: File;

  constructor(private rs: RequisicaoService, private router: Router) {}

  ngOnInit() {
    // Pega valores do sessionStorage
    this.nome = sessionStorage.getItem('username') || '';
    this.genero = sessionStorage.getItem('genero') || '';
    this.email = sessionStorage.getItem('email') || '';
    this.dataN = sessionStorage.getItem('dataN') || '';

    const img = sessionStorage.getItem('imagem');
    if (img) {
      this.srcImage = 'http://localhost/autenticacao/uploads/' + img;
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = e => this.srcImage = reader.result as string;
    reader.readAsDataURL(this.selectedFile);
  }

  salvar() {
    const fd = new FormData();
    fd.append('controller', 'atualizar-usuario');
    fd.append('id', String(sessionStorage.getItem('id')));
    fd.append('nome', this.nome);
    fd.append('genero', this.genero);

    if (this.selectedFile) {
      fd.append('imagem', this.selectedFile);
    }

    this.rs.post(fd, 'atualizar-usuario.php').subscribe((res: any) => {
      if (res.status === 'success') {
        // Atualiza sessionStorage
        sessionStorage.setItem('username', this.nome);
        sessionStorage.setItem('genero', this.genero);
        if (res.imagem) sessionStorage.setItem('imagem', res.imagem);

        this.router.navigate(['/info']); // volta para info page
      } else {
        console.error(res.msg);
      }
    });
  }
}
