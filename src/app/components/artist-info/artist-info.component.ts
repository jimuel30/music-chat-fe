import { Component } from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-artist-info',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './artist-info.component.html',
  styleUrl: './artist-info.component.scss'
})
export class ArtistInfoComponent {

  imageUrl = "https://i.scdn.co/image/ab6761610000e5ebf806c08eef7d367476b561d0";

}
