import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonButton, IonIcon, IonSelect, IonSelectOption, IonList, IonItem,} from '@ionic/angular/standalone';
import { chevronForwardOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons'
import { IonCheckbox } from '@ionic/angular/standalone';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.page.html',
  styleUrls: ['./questionario.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonButton, IonIcon, CommonModule, FormsModule, IonCheckbox, IonSelect, IonSelectOption,IonList,IonItem]
})
export class QuestionarioPage implements OnInit {
  constructor() { 
  }

  ngOnInit() {
  }

}