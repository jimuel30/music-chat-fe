import { Component } from '@angular/core';
import {AuthLoginButtonsComponent} from "../../components/auth-login-buttons/auth-login-buttons.component";
import {TextInputComponent} from "../../components/text-input/text-input.component";
import {TextInputConstants} from "../../constants/TextInputConstants";
import {ApiCallerService} from "../../services/api-caller.service";
import {LoginRequest} from "../../domain/LoginRequest";
import {UrlConstant} from "../../constants/UrlConstant";
import {ErrorWarnerComponent} from "../../components/error-warner/error-warner.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    AuthLoginButtonsComponent,
    TextInputComponent,
    ErrorWarnerComponent,
    NgIf
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

constructor(private apiService:ApiCallerService) {
  }


  loginRequest:LoginRequest ={
    userNameOrEmail:"",
    password:""
  }


  errorMessage = "";


  setUserNameOrEmail(userNameOrEmail:string){
    this.loginRequest.userNameOrEmail = userNameOrEmail;
  }

  setPassword(password:string){
    this.loginRequest.password = password
  }


  loginHandler(): void {
    this.apiService.postWithoutBearer(UrlConstant.loginUrl, this.loginRequest).subscribe({
      next: (v) => {
          console.log(v.data);
          this.errorMessage = ""
      },
      error: (e) => {

        console.log(e.error.message)
        this.errorMessage = e.error.message.toString();
      },
      complete: () => console.info('complete'),
    });
  }

  protected readonly TextInputConstants = TextInputConstants;
}
