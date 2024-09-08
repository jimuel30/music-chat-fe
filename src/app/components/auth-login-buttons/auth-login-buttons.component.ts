import { Component } from '@angular/core';
import {AuthButtonComponent} from "../auth-button/auth-button.component";
import {ButtonsConstant} from "../../constants/ButtonsConstant";

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


  protected readonly ButtonsConstant = ButtonsConstant;
}
