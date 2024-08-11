import {Component, Input} from '@angular/core';
import {TextInputConfig} from "../../domain/TextInputConfig";

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss'
})
export class TextInputComponent {
  @Input()
  textInputConfig!:TextInputConfig;

}
