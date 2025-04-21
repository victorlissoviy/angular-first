import {Routes} from '@angular/router';
import {
  EducationComponent,
  ProgramingComponent,
  TripsComponent
} from './components';

export const route: Routes = [
  {
    path: 'education', component: EducationComponent
  }, {
    path: 'programing', component: ProgramingComponent
  }, {
    path: 'trips', component: TripsComponent
  }
]
