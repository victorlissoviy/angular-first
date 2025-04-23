import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked
} from '@angular/core';
import {GrandChildComponent} from '../grand-child/grand-child.component';

@Component({
  selector: 'app-child',
  imports: [
    GrandChildComponent
  ],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent
  implements OnInit, OnDestroy, OnChanges, DoCheck, AfterViewInit,
    AfterViewChecked, AfterContentInit, AfterContentChecked {

  @Input() value: string = '';

  constructor() {
    console.log("child Constructor", this.value);
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked", this.value);
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit", this.value);
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked", this.value);
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit", this.value);
  }

  ngDoCheck(): void {
    console.log("ngDoCheck", this.value);
  }

  ngOnInit() {
    console.log("ngOnInit", this.value);
  }

  ngOnDestroy() {
    console.log("ngOnDestroy", this.value);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("CHANGES", changes);
    console.log("ngOnChanges", this.value);
  }
}
