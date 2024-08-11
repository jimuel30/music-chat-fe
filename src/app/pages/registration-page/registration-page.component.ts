import { Component } from '@angular/core';
import {TextInputComponent} from "../../components/text-input/text-input.component";
import {TextInputConfig} from "../../domain/TextInputConfig";
import {DateInputConfig} from "../../domain/DateInputConfig";
import {DateInputComponent} from "../../components/date-input/date-input.component";
import {RegisterRequest} from "../../domain/RegisterRequest";

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



  panelSlide = 1;

  registerRequest:RegisterRequest={
    userName: "",       // Removed 'private' keyword as it's not used in TypeScript interfaces
    firstName: "",
    middleName: "",    // Marked as optional with '?'
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",         // Assuming 'Gender' is another interface or enum defined elsewhere
    birthDate: new Date(),
  }


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

  goBackPreviousPanel(){
    const isFirstSlide = this.panelSlide==1
    this.panelSlide = isFirstSlide?1:this.panelSlide-1;
    if (!isFirstSlide){
      //TODO SLIDE BACK
    }
  }

  slidePanelHandler() {
    const isLastSlide = this.panelSlide == 2;
    this.panelSlide = isLastSlide ? this.panelSlide : this.panelSlide + 1;

    if(isLastSlide){
      //TODO CALL REGISTER ENDPOINT
    }else {
      //TODO VALIDATE INPUT OF CURRENT PANEL
      //TODO SLIDE FORWARD
    }
  }

  callAuthenticationApi(){

  }











}
