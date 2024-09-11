import { Component } from '@angular/core';
import {ArtistsSectionComponent} from "../artists-section/artists-section.component";

@Component({
  selector: 'app-feed-section',
  standalone: true,
  imports: [
    ArtistsSectionComponent
  ],
  templateUrl: './feed-section.component.html',
  styleUrl: './feed-section.component.scss'
})
export class FeedSectionComponent {

}
