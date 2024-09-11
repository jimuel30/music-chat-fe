import {Component, Input} from '@angular/core';
import {Artist} from "../../domain/Artist";
import {NgOptimizedImage, NgStyle} from "@angular/common";

@Component({
  selector: 'app-artist-box',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgStyle
  ],
  templateUrl: './artist-box.component.html',
  styleUrl: './artist-box.component.scss'
})
export class ArtistBoxComponent {

  @Input() artist!:Artist;

}
