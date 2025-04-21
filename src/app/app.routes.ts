import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {
  CarNotebookComponent,
  CarPhoneComponent,
  CarTvComponent
} from './car/components';
import {route} from './posts/posts.routes';

export const routes: Routes = [
  {
    path: '', component: AppComponent
  }, {
    path: 'notebook', component: CarNotebookComponent
  }, {
    path: 'phone', component: CarPhoneComponent
  }, {
    path: 'tv', component: CarTvComponent
  },
  ...route
]

