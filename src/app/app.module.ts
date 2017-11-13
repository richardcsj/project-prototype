import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {UserService} from './services/user.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { MenuComponent } from './components/menu/menu.component';
import { CustomerMenuComponent } from './components/menu/customer-menu/customer-menu.component';
import { OwnerMenuComponent } from './components/menu/owner-menu/owner-menu.component';
import { AdminMenuComponent } from './components/menu/admin-menu/admin-menu.component';
import { UserComponent } from './components/admin/user/user.component';
import { PropertyComponent } from './components/admin/property/property.component';
import { ReviewComponent } from './components/admin/review/review.component';
import { DetailsComponent } from './components/admin/user/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    MenuComponent,
    CustomerMenuComponent,
    OwnerMenuComponent,
    AdminMenuComponent,
    UserComponent,
    PropertyComponent,
    ReviewComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
