import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonLabel, IonItem, IonList, IonText, IonButton, IonInputPasswordToggle, IonPopover, IonIcon } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { chevronBackOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-esenha',
  templateUrl: './esenha.page.html',
  styleUrls: ['./esenha.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonLabel, IonItem, IonList, IonText, IonButton, IonPopover, IonIcon, RouterLink, CommonModule, FormsModule, IonInputPasswordToggle]
})
export class ESenhaPage implements OnInit {

  constructor() { 
    addIcons({chevronBackOutline})
  }

  ngOnInit() {
  }

}
