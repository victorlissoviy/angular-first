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
   * Масив картинок в public
   */
  images: string[] = [
    "/image-53594.jpg",
    "/image-273886.jpg",
    "/image-40465.jpg"
  ];

  /**
   * Індекс поточної картинки
   */
  imageIndex: number = 0;

  /**
   * Поточна картинка.
   */
  imageFile: string = this.images[0];

  toggleColor() {
    this.isBlue = !this.isBlue;
  }

  /**
   * Зміна до попередньої картинки
   */
  prevImage() {
    this.imageIndex--;
    if (this.imageIndex < 0) {
      this.imageIndex = this.images.length - 1;
    }
    this.imageFile = this.images[this.imageIndex];
  }

  /**
   * Зміна до наступної картинки
   */
  nextImage() {
    this.imageIndex++;
    if (this.imageIndex >= this.images.length) {
      this.imageIndex = 0;
    }
    this.imageFile = this.images[this.imageIndex];
  }

  /**
   * Реакція на натискання клавіатури
   * @param {KeyboardEvent} event подія натискання
   */
  @HostListener('window:keydown', ['$event'])
  keySwitchImage(event: KeyboardEvent) {
    console.log(event.key);

    if (event.key === 'ArrowLeft') {
      this.prevImage();
    } else if (event.key === 'ArrowRight') {
      this.nextImage();
    } else if (event.key === 'c' || event.key === 'с') {
      this.toggleColor();
    }
  }
}
