import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.scss'
})
export class SplashScreenComponent implements OnInit {
  showImage = true; // To control the visibility of the image

  constructor() { }

  ngOnInit(): void {
    const openedBefore = sessionStorage.getItem('appOpenedBefore');
  console.log(openedBefore);
    if (openedBefore === 'true') {
      console.log(openedBefore);
      this.showImage = false; // Don't show the image if app was opened before
    } else {
      console.log('openedBefore');
      this.showImage = true; // Show image on first load
      sessionStorage.setItem('appOpenedBefore', 'true'); // Mark app as opened
    }
  }
}
