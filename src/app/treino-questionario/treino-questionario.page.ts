import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-treino-questionario',
  templateUrl: './treino-questionario.page.html',
  styleUrls: ['./treino-questionario.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonButton,
  ]
})
export class TreinoQuestionarioPage {

  gerarTreino(): void {
    console.log('Botão GERAR MEU TREINO foi clicado!');
    // Aqui você pode colocar a lógica futura de geração de treino
  }
}

