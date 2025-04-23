import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, Input,
  OnChanges,
  OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-grand-child',
  imports: [],
  templateUrl: './grand-child.component.html',
  styleUrl: './grand-child.component.scss'
})
export class GrandChildComponent
  implements OnInit, OnDestroy, OnChanges, DoCheck, AfterViewInit,
  AfterViewChecked, AfterContentInit, AfterContentChecked {

  @Input() value: string = '';

  constructor() {
    console.log("Grand child child Constructor", this.value);
  }

  ngAfterContentChecked(): void {
    console.log("Grand child ngAfterContentChecked", this.value);
  }

  ngAfterContentInit(): void {
    console.log("Grand child ngAfterContentInit", this.value);
  }

  ngAfterViewChecked(): void {
    console.log("Grand child ngAfterViewChecked", this.value);
  }

  ngAfterViewInit(): void {
    console.log("Grand child ngAfterViewInit", this.value);
  }

  ngDoCheck(): void {
    console.log("Grand child ngDoCheck", this.value);
  }

  ngOnInit() {
    console.log("Grand child ngOnInit", this.value);
  }

  ngOnDestroy() {
    console.log("Grand child ngOnDestroy", this.value);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("CHANGES", changes);
    console.log("Grand child ngOnChanges", this.value);
  }

}
