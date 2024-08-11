import { Component } from '@angular/core';
import {TextInputComponent} from "../../components/text-input/text-input.component";
import {TextInputConfig} from "../../domain/TextInputConfig";
import {DateInputConfig} from "../../domain/DateInputConfig";
import {DateInputComponent} from "../../components/date-input/date-input.component";

@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [
    TextInputComponent,
    DateInputComponent
  ],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.scss'
})
export class RegistrationPageComponent {

  firstNameInputConfig:TextInputConfig={
    label:"First Name",
    placeHolder:"Your first Name",
    type:"text"
  }
  middleNameInputConfig:TextInputConfig={
    label:"Middle Name",
    placeHolder:"Your Middle Name",
    type:"text"
  }
  lastNameInputConfig:TextInputConfig={
    label:"Last Name",
    placeHolder:"Your Last Name",
    type:"text"
  }

  userNameInputConfig:TextInputConfig={
    label:"Username",
    placeHolder:"Username",
    type:"text"
  }


  emailInputConfig:TextInputConfig={
    label:"Email",
    placeHolder:"Password Here",
    type:"Email"
  }

  passwordInputConfig:TextInputConfig={
    label:"Password",
    placeHolder:"Password Here",
    type:"Password"
  }

  confirmPasswordInputConfig:TextInputConfig={
    label:"Confirm Password",
    placeHolder:"Confirm Password Here",
    type:"Password"
  }

  birthDateInputConfig:DateInputConfig={
    label:"Birth Date",
     specifiedDate:this.getDate18yearsAgo()
  }

  getDate18yearsAgo(){
    const today = new Date();
    return  new Date(today.setFullYear(today.getFullYear() - 18));
  }



}
