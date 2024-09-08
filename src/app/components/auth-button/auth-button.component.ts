import {Component, Input} from '@angular/core';
import {AuthButtonConfig} from "../../domain/IconConfig";

@Component({
  selector: 'app-auth-button',
  standalone: true,
  imports: [],
  templateUrl: './auth-button.component.html',
  styleUrl: './auth-button.component.scss'
})
export class AuthButtonComponent {

  @Input() buttonConfig!:AuthButtonConfig;
}
