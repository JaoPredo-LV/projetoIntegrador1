import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonContent, IonBackButton, IonButtons, IonButton, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-trcvintecincoest',
  templateUrl: './trcvintecincoest.page.html',
  styleUrls: ['./trcvintecincoest.page.scss'],
  standalone: true,
  imports: [IonContent, RouterModule, IonBackButton, IonButtons, IonButton, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})

export class TrcvintecincoestPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}