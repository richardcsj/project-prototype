import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {LoginComponent} from "./components/user/login/login.component";
import {RegisterComponent} from "./components/user/register/register.component";
import {HomeComponent} from "./components/home/home.component";
import {ProfileComponent} from "./components/user/profile/profile.component";
import {MenuComponent} from "./components/menu/menu.component";
import { UserComponent } from './components/admin/user/user.component';
import { PropertyComponent } from './components/admin/property/property.component';
import { ReviewComponent } from './components/admin/review/review.component';
import { DetailsComponent } from './components/admin/user/details/details.component';

// Import all other components here
const APP_ROUTES : Routes = [
  { path : '', component: HomeComponent},
  { path : 'login' , component: LoginComponent},
  { path : 'register' , component:RegisterComponent },
  { path : 'profile/:userId' , component: ProfileComponent},
  { path : 'profile/:userId/menu' , component: MenuComponent},
  { path: 'admin/:adminId/user', component: UserComponent},
  { path: 'admin/:adminId/property', component: PropertyComponent},
  { path: 'admin/:adminId/review', component: ReviewComponent},
  { path: 'admin/:adminId/user/:userId', component: DetailsComponent}
];
// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
