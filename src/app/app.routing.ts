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
import { UserDetailsComponent } from './components/admin/user/details/details.component';
import { PropertyDetailsComponent } from './components/admin/property/details/details.component';
import { ClientComponent } from './components/owner/client/client.component';
import { OwnerPropertyComponent } from './components/owner/property/property.component';
import { OwnerReviewComponent } from './components/owner/review/review.component';


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
  { path: 'admin/:adminId/user/:userId', component: UserDetailsComponent},
  { path: 'admin/:adminId/property/:propertyId', component:PropertyDetailsComponent},
  { path: 'owner/:ownerId/client',component:ClientComponent},
  { path: 'owner/:ownerId/property',component:OwnerPropertyComponent},
  { path: 'owner/:ownerId/review',component:OwnerReviewComponent}
];
// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
