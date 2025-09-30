import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonContent, IonIcon, IonBackButton, IonButton, IonButtons, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-hitvinteesteira',
  templateUrl: './hitvinteesteira.page.html',
  styleUrls: ['./hitvinteesteira.page.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, RouterModule, IonBackButton, IonButton, IonButtons, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HitvinteesteiraPage implements OnInit {
 niveis = [
    { numero: 0, titulo: 'Muito Fácil', link: '/hitesteira' },
    { numero: 1, titulo: 'Fácil', link: '/nivel1' },
    { numero: 2, titulo: 'Moderado', link: '/nivel2' },
    { numero: 3, titulo: 'Moderado Alto', link: '/nivel3' },
    { numero: 4, titulo: 'Forte', link: '/nivel4' },
    { numero: 5, titulo: 'Máximo', link: '/nivel5' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
