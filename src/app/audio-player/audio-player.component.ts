import { Component, Input, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  standalone: true,
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnChanges, OnDestroy {
  @Input() trackName: string = '';  // Passed from parent
  @Input() trackTitle: string = ''; // Passed from parent

  isPlaying: boolean = false;
  audio: HTMLAudioElement | null = null;

  audioFiles: { [key: string]: string } = {
    uenoPark: 'assets/audio/uenoPark.wav',
    sensoji: 'assets/audio/sensoji.wav',
    // Add more tracks as needed
  };

  // Load and play/pause the sound when the trackName changes
  ngOnChanges(): void {
    if (this.trackName) {
      this.loadSound(this.trackName);
    }
  }

  async loadSound(trackName: string): Promise<void> {
    // Stop the current track if one is playing
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }

    const audioFile = this.audioFiles[trackName];

    if (!audioFile) {
      console.error('Audio file does not exist for track:', trackName);
      return;
    }

    this.audio = new Audio(audioFile);
    this.isPlaying = false;
  }

  // Play or pause the current track
  async playOrPause(): Promise<void> {
    if (this.audio) {
      try {
        if (this.isPlaying) {
          this.audio.pause();
          this.isPlaying = false;
        } else {
          await this.audio.play();
          this.isPlaying = true;
        }
      } catch (error) {
        console.error('Error playing audio:', error);
      }
    }
  }

  // Cleanup audio when component is destroyed
  ngOnDestroy(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }
}
