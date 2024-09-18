import { Component } from '@angular/core';
import {SearchBarComponent} from "../search-bar/search-bar.component";

@Component({
  selector: 'app-add-pick-form',
  standalone: true,
  imports: [
    SearchBarComponent
  ],
  templateUrl: './add-pick-form.component.html',
  styleUrl: './add-pick-form.component.scss'
})
export class AddPickFormComponent {

}
