import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonAvatar, IonButtons, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-hiteliptco',
  templateUrl: './hiteliptco.page.html',
  styleUrls: ['./hiteliptco.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonAvatar, IonButtons, IonBackButton ]
})
export class HiteliptcoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
