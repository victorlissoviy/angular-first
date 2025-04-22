import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  @Input() name = 'Child counter name';
  @Input('step') stepCounter:number = 3;
  @Input() counterValue:number = 0;

  @Output() inputChange = new EventEmitter<string>();
  @Output() countChange = new EventEmitter<number>();

  increment() {
    this.counterValue += this.stepCounter;
    this.countChange.emit(this.counterValue);
  }

  onInputChange(event: Event) {
    let target = event.target as HTMLInputElement;
    this.inputChange.emit(target.value);
  }
}
