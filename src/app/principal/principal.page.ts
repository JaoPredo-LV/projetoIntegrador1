import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonContent, IonHeader,IonLabel, IonButton, IonIcon, IonBackButton } from '@ionic/angular/standalone';
import { chevronForwardOutline, chevronBackCircleOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons'

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonLabel, IonButton, IonIcon, CommonModule, RouterModule, FormsModule, IonBackButton]
})
export class PrincipalPage implements OnInit {
  usuario = {
    nome: sessionStorage.getItem('username')
  } 
  constructor() {
    addIcons({chevronForwardOutline, chevronBackCircleOutline})
  }

  ngOnInit() {
  }

}
