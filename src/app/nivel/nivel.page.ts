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
  alturasFinais: number[] = [60, 80, 40, 70, 90, 60, 45];
  barrasAtivas: boolean[] = [false, false, false, false, false, false, false];
  barraAtualIndex: number = 0;
  alturasAtuais: number[] = [0, 0, 0, 0, 0, 0, 0];
  velocidadePreenchimento: number = 1; // Você pode ajustar este valor
  treinoConcluido: boolean = false;
  velocidades: string[] = ['4-5 km/h', '5-6 km/h', '6-7 km/h', '7-8 km/h', '8-9 km/h', '9-10 km/h', '10-11 km/h'];
  velocidadeAtual: string = this.velocidades[0];
  proximaVelocidade: string = this.velocidades[1];

  constructor() { }

  ngOnInit() {
    this.iniciarContador();
  }
    ngOnDestroy() {
    this.pararContador();
  }
    iniciarContador() {
      this.intervalo = setInterval(() => {
        // Incrementa o tempo
        this.tempoDoTreino++;
        
        // Define a duração da barra atual
        const duracaoTotal = this.barraAtualIndex === 0 ? 60 : 120;
        
        // Lógica do Círculo
        this.progressoPorcentagem = (this.tempoDoTreino / duracaoTotal) * 100;
        
        // Lógica da Animação das Barras
        if (this.barraAtualIndex < this.alturasFinais.length) {
            this.alturasAtuais[this.barraAtualIndex] = (this.progressoPorcentagem / 100) * this.alturasFinais[this.barraAtualIndex];

            // Condição para resetar e ir para a próxima barra
            if (this.tempoDoTreino >= duracaoTotal) {
                this.tempoDoTreino = 0;
                this.alturasAtuais[this.barraAtualIndex] = this.alturasFinais[this.barraAtualIndex];
                this.barraAtualIndex++;
            }

             if (this.barraAtualIndex < this.velocidades.length) {
              this.velocidadeAtual = this.velocidades[this.barraAtualIndex];
              // Garante que a próxima velocidade não seja indefinida no final
              if (this.barraAtualIndex + 1 < this.velocidades.length) {
                this.proximaVelocidade = this.velocidades[this.barraAtualIndex + 1];
              } else {
                this.proximaVelocidade = ''; // Ou uma mensagem de "Última"
              }
            }

        } else {
          
          this.treinoConcluido = true;
            this.pararContador();
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
