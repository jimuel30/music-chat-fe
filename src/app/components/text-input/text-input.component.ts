import {Component, Input} from '@angular/core';
import {TextInputConfig} from "../../domain/TextInputConfig";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss'
})
export class TextInputComponent {
  @Input() inputConfig!: TextInputConfig;

  //this is used on toggle password mask
  showPassword = false;

  //this used on toggling password border
  isActive = false;




  toggleShowPassword(){
    this.showPassword = !this.showPassword
  }








  onFocus() {
    this.isActive = true;
  }

  onBlur() {
    this.isActive = false;
  }

  onMouseEnter() {
    this.isActive = true;
  }

  onMouseLeave() {
    this.isActive = false;
  }

}
