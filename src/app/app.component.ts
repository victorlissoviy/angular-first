import {Component} from '@angular/core';
import {ParentComponent} from './components/parent/parent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    ParentComponent
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
}
