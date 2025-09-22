import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonButton} from '@ionic/angular/standalone';


@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.page.html',
  styleUrls: ['./questionario.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader,IonButton, CommonModule, FormsModule]
})
export class QuestionarioPage implements OnInit {
  constructor() { 
  }

  ngOnInit() {
  }

}