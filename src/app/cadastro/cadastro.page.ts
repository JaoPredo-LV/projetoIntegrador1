import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonText, IonButton, IonIcon, IonInputPasswordToggle } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { home, personCircleOutline } from 'ionicons/icons';
import { RealtimeDatabase } from '../firebase/realtime-database';



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
    public rt: RealtimeDatabase
  ) {
    addIcons({home, personCircleOutline})
   }

  ngOnInit() {
  }

  salvar(){
    this.rt.add('/cadastro',{
      nome: this.nome,
      data: this.data,
      peso: this.peso,
      altura: this.altura,
      genero: this.genero,
      email: this.email,
      senha: this.senha,
    },this.id)
    .subscribe({
      next: (res:any) =>{
      },

    })
  }

}
