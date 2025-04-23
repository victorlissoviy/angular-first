import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef, QueryList
} from '@angular/core';
import {GranChildComponent} from '../gran-child/gran-child.component';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  @ContentChild('element') element: ElementRef | undefined;

  @ContentChildren(GranChildComponent)
  granChild: QueryList<GranChildComponent> | undefined;

  changeText() {
    if (this.element != null) {
      this.element.nativeElement.innerHTML = "Changed from content child";
    }
  }

  changeGrandChildColor() {
    this.granChild?.forEach(grandChild =>
      grandChild.changeColor());
  }
}
