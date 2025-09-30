import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonLabel, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { chevronForwardOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons'

@Component({
  selector: 'app-tempobike',
  templateUrl: './tempobike.page.html',
  styleUrls: ['./tempobike.page.scss'],
  standalone: true,
  imports: [IonContent, RouterModule, IonButton, IonHeader, IonTitle, IonToolbar, IonBackButton, IonLabel, IonButtons, IonButton, IonIcon, CommonModule, RouterModule, FormsModule]
})
export class TempobikePage implements OnInit {

  constructor() { 
  addIcons({chevronForwardOutline})
  }
  ngOnInit() {
  }

}
