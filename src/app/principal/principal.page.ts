import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonContent, IonHeader, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';
import { chevronBackCircleOutline, chevronForwardOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

import { SwiperModule, SwiperComponent } from 'swiper/angular';
import SwiperCore, { Autoplay, Pagination } from 'swiper';

SwiperCore.use([Autoplay, Pagination]);

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonLabel,
    IonButton,
    IonIcon,
    CommonModule,
    RouterModule,
    FormsModule,
    SwiperModule
  ]
})
export class PrincipalPage implements OnInit, AfterViewInit {
  usuario = {
    nome: sessionStorage.getItem('username')
  };

  propagandas = [
    {
      img: 'assets/propagandawhey.jpg',
      link: 'https://www.gsuplementos.com.br/whey-protein-concentrado-1kg-growth-supplements-p985936'
    },
    {
      img: 'assets/growthwheyy.jpg',
      link: 'https://www.gsuplementos.com.br/whey-protein-concentrado-1kg-growth-supplements-p985936'
    },
    {
      img: 'assets/max.jpg',
      link: 'https://https://www.maxtitanium.com.br/creatine-pote-300g/p?skuid=31'
    }
  ];

  @ViewChild('swiper') swiper?: SwiperComponent;

  constructor() {
    addIcons({ chevronForwardOutline, chevronBackCircleOutline });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.swiper?.swiperRef.autoplay?.start();
    }, 300);
  }
}
