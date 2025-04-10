import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isBlue:boolean = false;
  interpolation: string = "some text";

  toggleColor() {
    this.isBlue = !this.isBlue;
  }
}
