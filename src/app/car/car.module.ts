import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  CarTvComponent,
  CarNotebookComponent,
  CarPhoneComponent
} from './components';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarTvComponent,
    CarNotebookComponent,
    CarPhoneComponent
  ]
})
export class CarModule {
}
