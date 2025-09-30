import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonContent, IonBackButton, IonButtons, IonButton, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-hitrun',
  templateUrl: './hitrun.page.html',
  styleUrls: ['./hitrun.page.scss'],
  standalone: true,
  imports: [IonContent, RouterModule, IonBackButton, IonButtons, IonButton, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HitrunPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
