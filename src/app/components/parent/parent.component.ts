import {Component, QueryList, ViewChildren} from '@angular/core';
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

  @ViewChildren('child') childList: QueryList<ChildComponent> | undefined;

  changeColor() {
    this.childList?.forEach(child => child.changeColor());
  }
}
