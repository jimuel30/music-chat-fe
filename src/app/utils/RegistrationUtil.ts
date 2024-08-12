import {RegisterRequest} from "../domain/RegisterRequest";
import {TextInputConfig} from "../domain/TextInputConfig";
import {DateInputConfig} from "../domain/DateInputConfig";

export class RegistrationUtil{


  static slide(panelSlide:number){
    let slidePanelId = "name-panel";
    if(panelSlide === 2 ){
      slidePanelId = "info-panel";
    }
    if(panelSlide === 3 ){
      slidePanelId = "credential-panel";
    }
    console.log(slidePanelId)

    const panelElement = document.getElementById(slidePanelId);

    if(panelElement){
      panelElement.scrollIntoView({ behavior: 'smooth' });
    }
  }



  static firstNameInputConfig:TextInputConfig={
    label:"First Name",
    placeHolder:"Your first Name",
    type:"text"
  }
  static middleNameInputConfig:TextInputConfig={
    label:"Middle Name",
    placeHolder:"Your Middle Name",
    type:"text"
  }
  static lastNameInputConfig:TextInputConfig={
    label:"Last Name",
    placeHolder:"Your Last Name",
    type:"text"
  }

  static userNameInputConfig:TextInputConfig={
    label:"Username",
    placeHolder:"Username",
    type:"text"
  }

  static emailInputConfig:TextInputConfig={
    label:"Email",
    placeHolder:"Password Here",
    type:"Email"
  }

  static passwordInputConfig:TextInputConfig={
    label:"Password",
    placeHolder:"Password Here",
    type:"Password"
  }

  static confirmPasswordInputConfig:TextInputConfig={
    label:"Confirm Password",
    placeHolder:"Confirm Password Here",
    type:"Password"
  }

  static birthDateInputConfig:DateInputConfig={
    label:"Birth Date",
    specifiedDate:this.getDate18yearsAgo()
  }
  static getDate18yearsAgo(){
    const today = new Date();
    return  new Date(today.setFullYear(today.getFullYear() - 18));
  }








}
