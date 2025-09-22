import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonLabel, IonButton,IonList, IonItem, IonInput } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonLabel, IonButton, IonList, IonItem, IonInput, RouterLink, CommonModule, FormsModule]
})
export class ConfigPage implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
