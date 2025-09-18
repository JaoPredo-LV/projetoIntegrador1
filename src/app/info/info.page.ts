import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonButton, IonIcon, IonList, IonItem } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline, personCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonButton, IonIcon, IonList, IonItem, CommonModule, FormsModule]
})
export class InfoPage implements OnInit {

  constructor() { 
    addIcons({chevronBackOutline, personCircleOutline})
  }

  ngOnInit() {
  }

}
