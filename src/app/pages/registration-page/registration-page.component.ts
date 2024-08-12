import { Component } from '@angular/core';
import {TextInputComponent} from "../../components/text-input/text-input.component";
import {TextInputConfig} from "../../domain/TextInputConfig";
import {DateInputConfig} from "../../domain/DateInputConfig";
import {DateInputComponent} from "../../components/date-input/date-input.component";
import {RegisterRequest} from "../../domain/RegisterRequest";
import {RegistrationUtil} from "../../utils/RegistrationUtil";
import {Router} from "@angular/router";

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

  constructor(private router: Router) {}

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

  goPreviousPanel(){
    const isFirstSlide = this.panelSlide==1
    this.panelSlide = isFirstSlide?1:this.panelSlide-1;
    if (!isFirstSlide){
      RegistrationUtil.slide(this.panelSlide)
    }
    else{
      this.router.navigate(['/']);
    }
  }

  goNextPanelHandler() {
    const isLastSlide = this.panelSlide == 3;
    this.panelSlide = isLastSlide ? this.panelSlide : this.panelSlide + 1;

    if(isLastSlide){
      //TODO CALL REGISTER ENDPOINT
      console.log("CALLING API...")
    }else {
      RegistrationUtil.slide(this.panelSlide)
    }
  }

  callAuthenticationApi(){

  }


  protected readonly RegistrationUtil = RegistrationUtil;
}
