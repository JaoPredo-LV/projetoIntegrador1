import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButtons, IonBackButton, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-dieta',
  templateUrl: './dieta.page.html',
  styleUrls: ['./dieta.page.scss'],
  standalone: true,
  imports: [CommonModule, IonBackButton, IonButtons, FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonIcon]
})
export class DietaPage implements OnInit {

  dias: any[] = [
    {
      nome: 'Segunda-feira',
      open: false,
      refeicoes: [
        { titulo: 'Café da manhã', hora: '08:00', alimentos: ['Pão integral', 'Queijo branco', 'Suco natural'] },
        { titulo: 'Almoço', hora: '12:30', alimentos: ['Arroz integral', 'Frango grelhado', 'Salada verde'] },
        { titulo: 'Jantar', hora: '19:30', alimentos: ['Sopa de legumes', 'Torradas integrais'] }
      ]
    },
    {
      nome: 'Terça-feira',
      open: false,
      refeicoes: [
        { titulo: 'Café da manhã', hora: '08:00', alimentos: ['Iogurte natural', 'Granola', 'Frutas'] },
        { titulo: 'Almoço', hora: '12:30', alimentos: ['Macarrão integral', 'Carne moída', 'Brócolis'] },
        { titulo: 'Jantar', hora: '19:30', alimentos: ['Omelete de claras', 'Salada de tomate'] }
      ]
    },
    {
      nome: 'Quarta-feira',
      open: false,
      refeicoes: [
        { titulo: 'Café da manhã', hora: '08:00', alimentos: ['Vitamina de banana', 'Aveia', 'Castanhas'] },
        { titulo: 'Almoço', hora: '12:30', alimentos: ['Peixe assado', 'Batata-doce', 'Legumes cozidos'] },
        { titulo: 'Jantar', hora: '19:30', alimentos: ['Crepioca recheada', 'Chá verde'] }
      ]
    },
    {
      nome: 'Quinta-feira',
      open: false,
      refeicoes: [
        { titulo: 'Café da manhã', hora: '08:00', alimentos: ['Tapioca com ovo', 'Suco de laranja'] },
        { titulo: 'Almoço', hora: '12:30', alimentos: ['Quinoa', 'Frango desfiado', 'Salada de rúcula'] },
        { titulo: 'Jantar', hora: '19:30', alimentos: ['Sopa de frango', 'Pão integral'] }
      ]
    },
    {
      nome: 'Sexta-feira',
      open: false,
      refeicoes: [
        { titulo: 'Café da manhã', hora: '08:00', alimentos: ['Ovos mexidos', 'Pão integral', 'Café sem açúcar'] },
        { titulo: 'Almoço', hora: '12:30', alimentos: ['Arroz integral', 'Carne magra', 'Abobrinha refogada'] },
        { titulo: 'Jantar', hora: '19:30', alimentos: ['Salada completa', 'Atum', 'Grão-de-bico'] }
      ]
    },
    {
      nome: 'Sábado',
      open: false,
      refeicoes: [
        { titulo: 'Café da manhã', hora: '09:00', alimentos: ['Panqueca de aveia', 'Mel', 'Morangos'] },
        { titulo: 'Almoço', hora: '13:00', alimentos: ['Lasanha integral', 'Salada mista'] },
        { titulo: 'Jantar', hora: '20:00', alimentos: ['Pizza caseira integral', 'Suco natural'] }
      ]
    },
    {
      nome: 'Domingo',
      open: false,
      refeicoes: [
        { titulo: 'Café da manhã', hora: '09:00', alimentos: ['Bolo integral', 'Chá de camomila'] },
        { titulo: 'Almoço', hora: '13:00', alimentos: ['Feijoada light', 'Arroz integral', 'Couve refogada'] },
        { titulo: 'Jantar', hora: '20:00', alimentos: ['Sanduíche natural', 'Suco detox'] }
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}

  toggleDia(index: number) {
    this.dias[index].open = !this.dias[index].open;
  }
}

