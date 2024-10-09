import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {CommonModule, NgStyle} from '@angular/common';
import {Router} from '@angular/router';
import {SplashScreenComponent} from '../splash-screen/splash-screen.component';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss'],
  standalone: true,
  imports: [
    NgStyle,
    CommonModule,
    SplashScreenComponent
  ],
  animations: [
    trigger('slideIn', [
      state('in', style({transform: 'translateX(0)'})),
      transition(':enter', [
        style({transform: 'translateX(-300px)'}),
        animate(1000)
      ])
    ]),
    trigger('fadeIn', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(1000)
      ])
    ]),
    trigger('float', [
      transition('* => *', [
        animate('3s ease-in-out', style({transform: 'translateY(-10px)'})),
        animate('3s ease-in-out', style({transform: 'translateY(0)'}))
      ])
    ])
  ]
})
export class HomeScreenComponent implements OnInit, OnDestroy {
  days = [
    { name: '23rd October', code: '23oct', subtitle: 'Velkam tu Tokio' },
    { name: '24th October', code: '24oct', subtitle: 'Al me zenira, pomoz bog' },
    { name: '25th October', code: '25oct', subtitle: 'Majmunska posla' },
    { name: '26th October', code: '26oct' , subtitle: 'Sipcenje uz stepenice, RIP tabani' },
    { name: '27th October', code: '27oct' , subtitle: 'Osaka Chillakaa ' },
    { name: '28th October', code: '28oct' , subtitle: 'Bambilend' },
    { name: '29th October', code: '29oct' , subtitle: 'FAKULTATIVNI IZLET BANJA KOVILJACA' },
    { name: '30th October', code: '30oct' , subtitle: 'Kamakura na pjenu od mora' },
    { name: '31st October', code: '31oct' , subtitle: 'Tokio nocu tacka kom' },
    { name: '1st November', code: '1nov' , subtitle: 'Mis, patka, pas, zenski mis' },
    { name: '2nd November', code: '2nov' , subtitle: 'LSD laboratorija i Harold Puter' },
    { name: '3rd November', code: '3nov', subtitle: 'LSD laboratorija i snopi' },
  ];

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

  modalVisible = false;
  showSplash = true;
  isPlaying = false;
  private audio = new Audio();


  constructor(private router: Router) {

    this.audio.src = '../../assets/audio/sensoji.wav'; // Adjust the path as necessary
    this.audio.load();

    setTimeout(() => {
      this.showSplash = false;
    }, 2000); // 5000 milliseconds = 5 seconds
  }

  ngOnInit(): void {
    // Load sound or other assets here
    this.loadAudio();
  }

  loadAudio() {
    // Load audio logic (simulating Expo Audio loading in Angular)
  }

  playSound() {
    this.audio.play().catch((error) => {
      console.error("Error playing sound:", error);
    });
  }

  handleCloseModal(): void {
    this.modalVisible = false;
  }

  openDetailsPage(day): void {
    console.log('Navigating to details page for day:', day);
    // Navigate to details page with day code as query parameter
    this.router.navigate(['/details'], { queryParams: { dayCode: day.code, dayName: day.subtitle } });


  }

  playOrPause(): void {
    if (this.isPlaying) {
      this.pauseAudio();
    } else {
      this.playAudio();
    }
  }

  playAudio() {
    // Logic to play audio
    this.isPlaying = true;
  }

  pauseAudio() {
    // Logic to pause audio
    this.isPlaying = false;
  }

  ngOnDestroy(): void {
    // Cleanup logic (like unloading sound)
  }
}
