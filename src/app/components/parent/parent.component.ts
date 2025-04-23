import {Component} from '@angular/core';
import {ChildComponent} from '../child/child.component';
import {GranChildComponent} from '../gran-child/gran-child.component';

@Component({
  selector: 'app-parent',
  imports: [
    ChildComponent,
    GranChildComponent
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

  parentText: string = "Parent Text";
}
