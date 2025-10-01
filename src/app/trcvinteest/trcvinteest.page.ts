import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-trcvinteest',
  templateUrl: './trcvinteest.page.html',
  styleUrls: ['./trcvinteest.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TrcvinteestPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
