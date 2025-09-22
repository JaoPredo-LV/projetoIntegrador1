import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButtons, IonBackButton, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-gymdesafios',
  templateUrl: './gymdesafios.page.html',
  styleUrls: ['./gymdesafios.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonBackButton,
    IonButtons,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonButton,
    IonIcon
  ]
})
export class GymdesafiosPage implements OnInit {

  dias: any[] = [
    {
      nome: 'Segunda-feira',
      open: false,
      desafios: [
        { titulo: 'Peito e Tríceps', treino: ['100 flexões ao longo do dia', '4x12 tríceps no banco'] }
      ]
    },
    {
      nome: 'Terça-feira',
      open: false,
      desafios: [
        { titulo: 'Pernas', treino: ['150 agachamentos ao longo do dia', '3x12 afundos por perna'] }
      ]
    },

        {
      nome: 'Quarta-feira',
      open: false,
      desafios: [
        { titulo: 'Cardio & Core', treino: ['5 km de corrida, caminhada ou bicicleta', ' 3x1 Prancha isométrica'] }
      ]
    },
        {
      nome: 'Quinta-feira',
      open: false,
      desafios: [
        { titulo: 'Costas e Bíceps', treino: ['150 barras fixas OU 100 remadas (máquina/elástico/peso livre)', '3x12 tríceps no banco'] }
      ]
    },
        {
      nome: 'Sexta-feira',
      open: false,
      desafios: [
        { titulo: 'HIIT (Alta Intensidade)', treino: ['10 rodadas de, 20s burpees, 20s polichinelos, 20s descanso'] }
      ]
    },
  ];


  constructor() {}

  ngOnInit() {}

  toggleDia(index: number) {
    this.dias[index].open = !this.dias[index].open;
  }
}

