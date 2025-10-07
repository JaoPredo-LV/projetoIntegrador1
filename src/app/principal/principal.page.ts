import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonContent, IonHeader, IonLabel, IonButton, IonIcon, IonAvatar } from '@ionic/angular/standalone';
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
    SwiperModule,
    IonAvatar
  ]
})
export class PrincipalPage implements OnInit, AfterViewInit {
  usuario = {
    nome: sessionStorage.getItem('username')
  };

  propagandas = [
    {
      img: 'assets/propagandawhey.jpg',
      link: 'https://darklabsuplementos.com.br/products/whey-protein-concentrado-1kg-dark-lab'
    },
    {
      img: 'assets/growthwheyy.jpg',
      link: 'https://www.gsuplementos.com.br/whey-protein-concentrado-1kg-growth-supplements-p985936'
    },
    {
      img: 'assets/darkmamba.jpg',
      link: 'https://darklabsuplementos.com.br/products/dark-mamba-60-capsulas-dark-lab'
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
