import { Component } from '@angular/core';
import {AuthLoginButtonsComponent} from "../../components/auth-login-buttons/auth-login-buttons.component";
import {TextInputComponent} from "../../components/text-input/text-input.component";
import {TextInputConstants} from "../../constants/TextInputConstants";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    AuthLoginButtonsComponent,
    TextInputComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  protected readonly TextInputConstants = TextInputConstants;
}
