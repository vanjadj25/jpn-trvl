import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {CommonModule, NgStyle} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {AudioPlayerComponent} from '../audio-player/audio-player.component';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
  imports: [NgStyle, CommonModule, AudioPlayerComponent],
  standalone: true,
  animations: [
    trigger('slideIn', [
      state('void', style({ transform: 'translateY(300px)' })),
      transition(':enter', [
        animate('1500ms ease', style({ transform: 'translateY(0)' }))
      ]),
    ])
  ]
})
export class DetailsPageComponent implements OnInit {
  day: any = { code: '23oct', name: 'Tokyo Day' }; // Example data, replace with route params
  currentTrack = '';
  currentTrackTitle = '';
  imageMapping = {
    '22oct': '../../assets/images/tokyo.webp',
    '23oct': '../../assets/images/tokyo.webp',
    '24oct': '../../assets/images/kyoto2.webp',
    '25oct': '../../assets/images/25oct.jpeg',
    '26oct': '../../assets/images/26oct.jpeg',
    '27oct': '../../assets/images/27oct.jpeg',
    '28oct': '../../assets/images/28oct.jpeg',
    '29oct': '../../assets/images/29oct.jpeg',
    '30oct': '../../assets/images/kamakura1.jpeg',
    '31oct': '../../assets/images/tokyo5.webp',
    '1nov': '../../assets/images/1nov.jpeg',
    '2nov': '../../assets/images/tokyo2.webp',
    '3nov': '../../assets/images/3nov.jpeg',
  };

  avatarMapping = {
    '23oct': '../../assets/images/gejsa-radojka.png',
    '24oct': '../../assets/images/gejsa-radojka.png',
    '25oct': '../../assets/images/nindza-radojka.png',
    '26oct': '../../assets/images/nindza-radojka.png',
    '27oct': '../../assets/images/nudl-radojka.png',
    '28oct': '../../assets/images/radojka.png',
    '29oct': '../../assets/images/radojka.png',
    '30oct': '../../assets/images/radojka.png',
    '31oct': '../../assets/images/radojka.png',
    '1nov': '../../assets/images/radojka.png',
    '2nov': '../../assets/images/radojka.png',
    '3nov': '../../assets/images/radojka.png',
  }

  tracks = [
    { name: 'Sensō-ji (金龍山浅草寺)', value: 'sensoji' },
    { name: 'Ueno Park (上野公園)', value: 'uenoPark' },
    { name: 'Sensō-ji (金龍山浅草寺)', value: 'sensoji' },
    { name: 'Ueno Park (上野公園)', value: 'uenoPark' },
    { name: 'Sensō-ji (金龍山浅草寺)', value: 'sensoji' },
    { name: 'Ueno Park (上野公園)', value: 'uenoPark' },
    { name: 'Sensō-ji (金龍山浅草寺)', value: 'sensoji' },
    { name: 'Ueno Park (上野公園)', value: 'uenoPark' }
  ];

  constructor(private route: ActivatedRoute) {

    // get the day from the query params
     this.route.queryParams.subscribe(params => {
       this.day.code = params['dayCode'];
        this.day.name = params['dayName'];

       console.log('day', this.day);
     });
  }

  ngOnInit(): void {}

  updateTrackInfo(track: any): void {
    this.currentTrack = track.value;
    this.currentTrackTitle = track.name;
    console.log('currentTrack', this.currentTrack);
  }
}
