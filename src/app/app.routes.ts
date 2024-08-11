import { Routes } from '@angular/router';
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {RegistrationPageComponent} from "./pages/registration-page/registration-page.component";

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'register', component: RegistrationPageComponent },
  // { path: 'dashboard', component: DashboardPageComponent },
  // { path: 'resume/:resumeId', component: ResumePageComponent },
];
