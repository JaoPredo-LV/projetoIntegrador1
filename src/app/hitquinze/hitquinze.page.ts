import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { RouterModule } from '@angular/router';
import { IonContent, IonIcon, IonBackButton, IonButton, IonButtons, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-hitquize',
  templateUrl: './hitquinze.page.html',
  styleUrls: ['./hitquinze.page.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, RouterModule, IonBackButton, IonButton, IonButtons,IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})

export class HitquinzePage {
  niveis = [
    { numero: 0, titulo: 'Muito Fácil' },
    { numero: 1, titulo: 'Fácil' },
    { numero: 2, titulo: 'Moderado' },
    { numero: 3, titulo: 'Moderado Alto' },
    { numero: 4, titulo: 'Forte' },
    { numero: 5, titulo: 'Máximo' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
