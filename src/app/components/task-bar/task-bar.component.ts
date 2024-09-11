import { Component } from '@angular/core';

@Component({
  selector: 'app-task-bar',
  standalone: true,
  imports: [],
  templateUrl: './task-bar.component.html',
  styleUrl: './task-bar.component.scss'
})
export class TaskBarComponent {

  meActive = true;
  chatActive = false;
  settingsActive = false;
  accountActive = false;

  meClickHandler(){
    this.meActive = true;
    this.chatActive = false;
    this.settingsActive = false;
    this.accountActive = false;
  }

  chatClickHandler(){
    this.meActive = false;
    this.chatActive = true;
    this.settingsActive = false;
    this.accountActive = false;
  }
  settingsClickHandler(){
    this.meActive = false;
    this.chatActive = false;
    this.settingsActive = true;
    this.accountActive = false;
  }
  accountClickHandler(){
    this.meActive = false;
    this.chatActive = false;
    this.settingsActive = false;
    this.accountActive = true;
  }

}
