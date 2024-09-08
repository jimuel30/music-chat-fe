import { Component } from '@angular/core';
import {AuthButtonComponent} from "../auth-button/auth-button.component";

@Component({
  selector: 'app-auth-login-buttons',
  standalone: true,
  imports: [
    AuthButtonComponent
  ],
  templateUrl: './auth-login-buttons.component.html',
  styleUrl: './auth-login-buttons.component.scss'
})
export class AuthLoginButtonsComponent {

}
