import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonContent, IonButtons, IonBackButton, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonIcon, IonCheckbox } from '@ionic/angular/standalone';

@Component({
  selector: 'app-gymdesafios',
  templateUrl: './gymdesafios.page.html',
  styleUrls: ['./gymdesafios.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonButton,
    IonIcon,
    IonBackButton,
    IonButtons,
    IonCheckbox
  ]
})
export class GymdesafiosPage implements OnInit {

  dias: any[] = [
    {
      nome: 'Segunda-feira',
      open: false,
      desafios: [
        {
          titulo: 'Objetivo: inferiores + superiores e fortalenciento do abdômen.',
          treino: [
            { nome: 'Agachamento', checked: false },
            { nome: 'Supino reto', checked: false },
            { nome: 'Abdominal', checked: false }
          ]
        }
      ]
    },
    {
      nome: 'Terça-feira',
      open: false,
      desafios: [
        {
          titulo: 'Objetivo: resistência, definição do core e membros superiores.',
          treino: [
            { nome: 'Corrida 20min', checked: false },
            { nome: 'Prancha 3x1min', checked: false },
            { nome: 'Flexão de braço', checked: false }
          ]
        }
      ]
    },
    {
      nome: 'Quarta-feira',
      open: false,
      desafios: [
        {
          titulo: ' Objetivo: fortalecimento de dorsais e braços.',
          treino: [
            { nome: 'Puxada frontal', checked: false },
            { nome: 'Remada baixa', checked: false },
            { nome: 'Rosca bíceps', checked: false }
          ]
        }
      ]
    },
    {
      nome: 'Quinta-feira',
      open: false,
      desafios: [
        {
          titulo: 'Objetivo: treino de força para inferiores + costas + ombros.',
          treino: [
            { nome: 'Avanço com halteres', checked: false },
            { nome: 'Levantamento terra', checked: false },
            { nome: 'Elevação lateral', checked: false }
          ]
        }
      ]
    },
    {
      nome: 'Sexta-feira',
      open: false,
      desafios: [
        {
          titulo: 'Objetivo: cardio + explosão + abdômen lateral.',
          treino: [
            { nome: 'Corrida HIIT 15min', checked: false },
            { nome: 'Burpees 3x10', checked: false },
            { nome: 'Prancha lateral 3x30s', checked: false }
          ]
        }
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}

  toggleDia(index: number) {
    this.dias[index].open = !this.dias[index].open;
  }
}
