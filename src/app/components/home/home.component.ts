import {Component, HostListener} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isBlue: boolean = false;
  interpolation: string = "some text";

  /**
   * Array of pictures in public folder.
   */
  images: string[] = [
    "/image-53594.jpg",
    "/image-273886.jpg",
    "/image-40465.jpg"
  ];

  /**
   * Index of current picture
   */
  imageIndex: number = 0;

  /**
   * Current picture.
   */
  imageFile: string = this.images[0];

  toggleColor() {
    this.isBlue = !this.isBlue;
  }

  /**
   * Change to previous picture
   */
  prevImage() {
    this.imageIndex--;
    if (this.imageIndex < 0) {
      this.imageIndex = this.images.length - 1;
    }
    this.imageFile = this.images[this.imageIndex];
  }

  /**
   * Change to next picture
   */
  nextImage() {
    this.imageIndex++;
    if (this.imageIndex >= this.images.length) {
      this.imageIndex = 0;
    }
    this.imageFile = this.images[this.imageIndex];
  }

  /**
   * Reaction on push keyboard button
   * @param {KeyboardEvent} event push event
   */
  @HostListener('window:keydown', ['$event'])
  keySwitchImage(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.prevImage();
    } else if (event.key === 'ArrowRight') {
      this.nextImage();
    } else if (event.key === 'c' || event.key === 'с') {
      this.toggleColor();
    }
  }
}
