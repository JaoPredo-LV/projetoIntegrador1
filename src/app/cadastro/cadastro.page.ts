import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { home, personCircleOutline } from 'ionicons/icons';
import { RequisicaoService } from '../service/requisicao';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, IonicModule],
})

export class CadastroPage {
  public nome:string="";
  public data:string="";
  public peso:string="";
  public altura:string="";
  public genero:string="";
  public email:string="";
  public senha:string="";
  constructor(
    public rs:RequisicaoService
  ) { 
    addIcons({home, personCircleOutline})
   }

  ngOnInit() {
  }

  salvar(){
    const fd =new FormData();
    fd.append('controller','cadastro-usuario');
    fd.append('nome', this.nome);
    fd.append('data', this.data);
    fd.append('peso', this.peso);
    fd.append('altura', this.altura);
    fd.append('genero', this.genero);
    fd.append('email', this.email);
    fd.append('senha', this.senha);

    this.rs.post(fd).subscribe();
  }
}