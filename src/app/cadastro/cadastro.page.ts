import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonText, IonButton, IonIcon, IonInputPasswordToggle } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { home, personCircleOutline } from 'ionicons/icons';
import { RealtimeDatabase } from '../firebase/realtime-database';
import { RequisicaoService } from '../service/requisicao';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonLabel, IonItem, IonList, IonText, IonButton, RouterLink, CommonModule, FormsModule, IonIcon, IonInputPasswordToggle]
})
export class CadastroPage implements OnInit {

  public id:number = 0;
  public nome:string='';
  public data:string='';
  public peso:string='';
  public altura:string='';
  public genero:string='';
  public email:string='';
  public senha:string='';

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
    fd.append('email', this.email);
    fd.append('senha', this.senha);
    fd.append('peso', this.peso);
    fd.append('altura', this.altura);
    fd.append('genero', this.genero);    

    this.rs.post(fd).subscribe();
  }
}
