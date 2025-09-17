import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonAvatar,
  IonButtons
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-treino-questionario',
  templateUrl: './treino-questionario.page.html',
  styleUrls: ['./treino-questionario.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonAvatar,
    IonButtons
  ]
})
export class TreinoQuestionarioPage implements OnInit {

  constructor() { }

  ngOnInit() { }

}
