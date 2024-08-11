import {Component, Input} from '@angular/core';
import {DateInputConfig} from "../../domain/DateInputConfig";

@Component({
  selector: 'app-date-input',
  standalone: true,
  imports: [],
  templateUrl: './date-input.component.html',
  styleUrl: './date-input.component.scss'
})
export class DateInputComponent {
  @Input() dateInputConfig!:DateInputConfig;
}
