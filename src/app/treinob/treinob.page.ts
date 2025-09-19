import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonLabel, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-treinob',
  templateUrl: './treinob.page.html',
  styleUrls: ['./treinob.page.scss'],
  standalone: true,
  imports: [IonContent, IonLabel, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TreinobPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
