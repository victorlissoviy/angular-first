import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-hw',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './hw.component.html',
  styleUrl: './hw.component.scss'
})
export class HwComponent {
  isDelButton: boolean = true;

  currentText:string = "";

  labels: string[] = [
    "one",
    "two",
    "three",
    "four"
  ];

  deleteButton() {
    this.isDelButton = false;
  }

  setNewLabel(event: MouseEvent) {
    let target = event.target;
    if (target == null) {
      return;
    }
    if (target instanceof HTMLButtonElement) {
      this.currentText = target.textContent ?? "";
    }

  }
}
