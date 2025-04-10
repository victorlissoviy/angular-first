import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  count:number = 0;

  countAdd($event: MouseEvent) {
    console.log( $event.target, 'target');
    this.count++;
  }
}
