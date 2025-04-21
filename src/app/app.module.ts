import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {ClouthingModule} from './clouthing/clouthing.module';
import {ChildProductsModule} from './child-products/child-products.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppComponent,
    ClouthingModule,
    ChildProductsModule
  ],
})
export class AppModule {
}
