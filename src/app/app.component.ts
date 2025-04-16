import {Component} from '@angular/core';
import {
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault, SlicePipe
} from '@angular/common';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    NgIf,
    NgForOf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgClass,
    DatePipe,
    SlicePipe,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first';

  isAdmin: boolean = false;

  car: string = "BMW"

  currentDate:Date = new Date();

  styles = [
    "red",
    "bold"
  ]

  style = {
    color: 'green',
    opacity: '0.5'
  }

  changeAdminStatus() {
    this.isAdmin = !this.isAdmin;
  }

  users: User[] = [
    {
      username: "Andriy",
      age: 21
    },
    {
      username: "Anna",
      age: 25
    },
    {
      username: "Max",
      age: 19
    }
  ]
}

interface User {
  username: string;
  age: number;
}
