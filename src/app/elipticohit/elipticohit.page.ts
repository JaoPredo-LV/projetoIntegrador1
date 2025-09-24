import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-elipticohit',
  templateUrl: './elipticohit.page.html',
  styleUrls: ['./elipticohit.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ElipticohitPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
