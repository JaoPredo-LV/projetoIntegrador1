import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonContent, IonHeader,  IonIcon, IonBackButton,IonAvatar, IonButton,IonThumbnail } from '@ionic/angular/standalone';

@Component({
  selector: 'app-opcaoc',
  templateUrl: './opcaoc.page.html',
  styleUrls: ['./opcaoc.page.scss'],
  standalone: true,
  imports: [IonContent, RouterModule, IonHeader, CommonModule, FormsModule, IonIcon, IonBackButton,IonAvatar, IonButton,IonThumbnail, ]
})
export class OpcaocPage implements OnInit {
  intervalos: any[] = []; 

  exercicios = [
    { nome: 'Abdominal Bicicleta', img: 'assets/gifs/abdominalbicicleta.gif', tempo: 0, rodando: false, descanso: '01:00' },
    { nome: 'Rosca martelo', img: 'assets/gifs/roscamartelo.gif', tempo: 0, rodando: false, descanso: '01:00' },
    { nome: 'Cavalinho', img: 'assets/gifs/cavalinho.gif', tempo: 0, rodando: false, descanso: '01:00' },
    { nome: 'Remada fechada', img: 'assets/gifs/remadafechada.gif', tempo: 0, rodando: false, descanso: '01:00' },
    { nome: 'Puxada Aberta', img: 'assets/gifs/puxadaaberta.gif', tempo: 0, rodando: false, descanso: '01:00' },
    { nome: 'Peck Deck', img: 'assets/gifs/peckdeck.gif', tempo: 0, rodando: false, descanso: '01:00' }
  ];

  constructor() {}

  ngOnInit() {}

  toggleTimer(index: number) {
    if (this.exercicios[index].rodando) {
      this.pausarTimer(index);
    } else {
      this.iniciarTimer(index);
    }
  }

  iniciarTimer(index: number) {
    this.exercicios[index].rodando = true;

    this.intervalos[index] = setInterval(() => {
      this.exercicios[index].tempo += 1000;
    }, 1000);
  }

  pausarTimer(index: number) {
    this.exercicios[index].rodando = false;
    clearInterval(this.intervalos[index]);
    this.intervalos[index] = null;
  }

  resetarTimer(index: number) {
    this.pausarTimer(index);
    this.exercicios[index].tempo = 0;
  }

  formatarTempo(ms: number): string {
    const totalSec = Math.floor(ms / 1000);
    const min = Math.floor(totalSec / 60);
    const sec = totalSec % 60;
    return `${this.pad(min)}:${this.pad(sec)}`;
  }

  private pad(n: number): string {
    return n < 10 ? '0' + n : '' + n;
  }
}


