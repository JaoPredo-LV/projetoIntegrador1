import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonLabel, IonButton,IonList, IonItem, IonInput } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { getDownloadURL, getStorage, ref, uploadString } from 'firebase/storage';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { RequisicaoService } from '../service/requisicao';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonLabel, IonButton, IonList, IonItem, IonInput, RouterLink, CommonModule, FormsModule]
})
export class ConfigPage implements OnInit {
  public nome:string="";
  public genero:string="";

  email = {
    email: sessionStorage.getItem('email')
  }

  date = {
    dataN: sessionStorage.getItem('dataN')
  }


  constructor(public rs: RequisicaoService) {
    this.nome = sessionStorage.getItem('username') || '';
    this.genero = sessionStorage.getItem('genero') || '';
  }

   salvar() {
    const fd =new FormData();
    fd.append('controller','atualizar-usuario');
    fd.append('id', String(sessionStorage.getItem('id')));
    fd.append('nome', this.nome);
    fd.append('genero', this.genero);

    sessionStorage.setItem('username', this.nome);
    sessionStorage.setItem('genero', this.genero);
    this.rs.post(fd).subscribe();
  }

  ngOnInit() {
  }

}
