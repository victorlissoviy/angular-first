import {Routes} from '@angular/router';
import {HwComponent} from './components/hw/hw.component';
import {AppComponent} from './app.component';

export const routes: Routes = [
  {
    path: '', component: AppComponent
  },
  {
    path: 'hw', component: HwComponent
  }
];
