import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonLabel, IonHeader} from '@ionic/angular/standalone';

@Component({
  selector: 'app-treinoc',
  templateUrl: './treinoc.page.html',
  styleUrls: ['./treinoc.page.scss'],
  standalone: true,
  imports: [IonContent, IonLabel, IonHeader,CommonModule, FormsModule]
})
export class TreinocPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
