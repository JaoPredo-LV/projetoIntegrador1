import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';
import { chevronForwardOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons'

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonButton, IonIcon, CommonModule, FormsModule]
})
export class PrincipalPage implements OnInit {
  usuario = {
    nome: "ALEXA"
  }  
  constructor() { 
    addIcons({chevronForwardOutline})
  }

  ngOnInit() {
  }

}
