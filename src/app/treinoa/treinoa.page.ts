  import { Component, OnInit } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';
  import { IonContent, IonHeader, IonTitle, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';
  import { chevronForwardOutline } from 'ionicons/icons';
  import { addIcons } from 'ionicons'

  @Component({
    selector: 'app-treinoa',
    templateUrl: './treinoa.page.html',
    styleUrls: ['./treinoa.page.scss'],
    standalone: true,
    imports: [IonContent, IonHeader, IonTitle, IonLabel, IonButton, IonIcon, CommonModule, FormsModule]
  })
  export class TreinoaPage implements OnInit {
    usuario = {
      nome: "ALEXA"
    }  
    constructor() { 
      addIcons({chevronForwardOutline})
    }

    ngOnInit() {
    }

  }
