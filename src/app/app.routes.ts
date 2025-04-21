import {Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {ManComponent, WomanComponent} from './clouthing';
import {FoodComponent, SchoolComponent, ToysComponent} from './child-products';

export const routes: Routes = [
  {
    path: '', component: MainComponent
  }, {
    path: 'man', component: ManComponent
  }, {
    path: 'woman', component: WomanComponent
  }, {
    path: 'toys',  component: ToysComponent
  }, {
    path: 'food', component: FoodComponent
  }, {
    path: 'school', component: SchoolComponent
  }
]

