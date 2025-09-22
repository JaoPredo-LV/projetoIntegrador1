import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonBackButton, IonButtons, IonHeader, IonIcon, IonLabel, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-treinos',
  templateUrl: './treinos.page.html',
  styleUrls: ['./treinos.page.scss'],
  standalone: true,
  imports: [IonContent,  IonBackButton, IonButtons, RouterModule, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonLabel, IonButton, IonIcon]
})
export class TreinosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
