import {Component} from '@angular/core';
import {ChildComponent} from './components/child/child.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    ChildComponent,
    NgIf
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
  show: boolean = false;
  parentValue: string = "some text";

  onInputchange(event: Event) {
    let target = event.target as HTMLInputElement;
    this.parentValue = target.value;
  }
}
