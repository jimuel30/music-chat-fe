import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TextInputConfig} from "../../domain/TextInputConfig";
import {NgClass, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    FormsModule
  ],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss'
})
export class TextInputComponent {
  @Input() inputConfig!: TextInputConfig;

  @Output() valueChange = new EventEmitter<string>();



  inputValue: string = '';


  //this is used on toggle password mask
  showPassword = false;

  //this used on toggling password border
  isActive = false;







  onInputChange() {
    this.valueChange.emit(this.inputValue);
  }


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
