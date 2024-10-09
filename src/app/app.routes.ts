import { Routes } from '@angular/router';
import {HomeScreenComponent} from './home-screen/home-screen.component';
import {DetailsPageComponent} from './details-page/details-page.component';

export const routes: Routes = [
  { path: '', component: HomeScreenComponent },
  { path: 'details', component: DetailsPageComponent }
];
