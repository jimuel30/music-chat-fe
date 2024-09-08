import { Routes } from '@angular/router';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {PersonalPageComponent} from "./pages/personal-page/personal-page.component";


export const routes: Routes = [
  { path: '', component: LoginPageComponent },
  {path:'personal',component:PersonalPageComponent}
  // { path: 'register', component: RegistrationPageComponent },
];
