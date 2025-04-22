import {Component} from '@angular/core';
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
  parentName: string = "Parent Name";
  parentCounter: number = 100;
  startCount: number = 3;
  stepValue: number = 5;

  handleInputChange(value:string) {
    this.parentName = value;
  }

  handleCounterChange(value:number) {
    this.parentCounter = value;
  }
}
