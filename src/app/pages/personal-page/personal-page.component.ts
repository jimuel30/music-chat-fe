import { Component } from '@angular/core';
import {SideBarComponent} from "../../components/side-bar/side-bar.component";
import {FeedSectionComponent} from "../../components/feed-section/feed-section.component";
import {TaskBarComponent} from "../../components/task-bar/task-bar.component";

@Component({
  selector: 'app-personal-page',
  standalone: true,
  imports: [
    SideBarComponent,
    FeedSectionComponent,
    TaskBarComponent
  ],
  templateUrl: './personal-page.component.html',
  styleUrl: './personal-page.component.scss'
})
export class PersonalPageComponent {

}
