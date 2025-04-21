import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';

import {
  CarTvComponent,
  CarNotebookComponent,
  CarPhoneComponent
} from './car/components';
import {PostsModule} from './posts';
import {UsersModule} from './users';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CarTvComponent,
    CarNotebookComponent,
    CarPhoneComponent,
    AppComponent,
    PostsModule,
    UsersModule,
  ],
})
export class AppModule {
}
