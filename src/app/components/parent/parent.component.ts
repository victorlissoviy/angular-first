import {Component, ElementRef, ViewChild} from '@angular/core';
import {ChildComponent} from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [
    ChildComponent
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

  @ViewChild('child') childComponent: ChildComponent | undefined
  @ViewChild('parentInput') inputValue: ElementRef | undefined;

  currentText: string = "Default Text";

  changeChildColor() {
    this.childComponent?.changeColor();
  }

  updateText() {
    this.currentText = this.inputValue?.nativeElement.value;
  }

  takeFokus() {
    this.inputValue?.nativeElement.focus();
  }
}
