import { Component } from '@angular/core';
import {AuthLoginButtonsComponent} from "../../components/auth-login-buttons/auth-login-buttons.component";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    AuthLoginButtonsComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

}
