import { Component } from '@angular/core';

@Component({
  selector: 'app-gran-child',
  imports: [],
  templateUrl: './gran-child.component.html',
  styleUrl: './gran-child.component.scss'
})
export class GranChildComponent {
  isRed: boolean = false;

  changeColor() {
    this.isRed = !this.isRed;
  }
}
