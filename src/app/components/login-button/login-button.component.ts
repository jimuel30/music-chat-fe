import {Component, Input} from '@angular/core';
import {NgStyle} from "@angular/common";
import {ButtonConfig} from "../../domain/ButtonConfig";

@Component({
  selector: 'app-login-button',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './login-button.component.html',
  styleUrl: './login-button.component.scss'
})
export class LoginButtonComponent {

  @Input() buttonConfig!:ButtonConfig;
  loadingIcon = "fa-solid fa-compact-disc fa-spin";


  setLoading(){
    this.buttonConfig.isLoading = true;
  }




}
