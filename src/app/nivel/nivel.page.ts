import { Component, OnInit, OnDestroy  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon, IonBackButton, IonButton, IonButtons, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-nivel',
  templateUrl: './nivel.page.html',
  styleUrls: ['./nivel.page.scss'],
  standalone: true,
  imports: [IonContent, IonIcon,IonBackButton, IonButton, IonButtons,IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NivelPage implements OnInit, OnDestroy {
  tempoDoTreino: number = 0;
  progressoPorcentagem: number = 0;
  private intervalo: any;
  private duracaoTotal: number = 60;
  alturasFinais: number[] = [60, 80, 40, 70, 90, 60, 45];
  barrasAtivas: boolean[] = [false, false, false, false, false, false, false];
  barraAtualIndex: number = 0;
  alturasAtuais: number[] = [0, 0, 0, 0, 0, 0, 0];
  velocidadePreenchimento: number = 1; // Você pode ajustar este valor

  constructor() { }

  ngOnInit() {
    this.iniciarContador();
  }
    ngOnDestroy() {
    this.pararContador();
  }
  iniciarContador() {
    this.intervalo = setInterval(() => {
      this.tempoDoTreino++;
      
          if (this.tempoDoTreino >= 60) {
      this.pararContador();
    }

      this.progressoPorcentagem = (this.tempoDoTreino / this.duracaoTotal) * 100;

    if (this.barraAtualIndex < this.alturasAtuais.length) {
      // Incrementa a altura da barra atual
      this.alturasAtuais[this.barraAtualIndex] += this.velocidadePreenchimento;

      // Se a barra atual atingiu ou ultrapassou a altura final, a fixa e avança para a próxima
      if (this.alturasAtuais[this.barraAtualIndex] >= this.alturasFinais[this.barraAtualIndex]) {
        this.alturasAtuais[this.barraAtualIndex] = this.alturasFinais[this.barraAtualIndex];
        this.barraAtualIndex++;
      }
    }
    }, 1000);
  }
    pararContador() {
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }

    formatarTempo(segundos: number): string {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;

    // Adiciona um '0' na frente se o número for menor que 10
    const minutosFormatado = minutos < 10 ? '0' + minutos : '' + minutos;
    const segundosFormatado = segundosRestantes < 10 ? '0' + segundosRestantes : '' + segundosRestantes;

    return `${minutosFormatado}:${segundosFormatado}`;
  }

}
