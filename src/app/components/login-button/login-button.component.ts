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








}
