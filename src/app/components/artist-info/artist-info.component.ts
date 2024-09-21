import {Component, Input, OnInit} from '@angular/core';
import {NgForOf, NgStyle} from "@angular/common";
import {ArtistObject} from "../../domain/ArtistSearchObject";
import {DomUtil} from "../../util/DomUtil";
import {UrlConstant} from "../../constants/UrlConstant";
import {ApiCallerService} from "../../services/api-caller.service";
import {Artist} from "../../domain/Artist";

@Component({
  selector: 'app-artist-info',
  standalone: true,
  imports: [
    NgStyle,
    NgForOf
  ],
  templateUrl: './artist-info.component.html',
  styleUrl: './artist-info.component.scss'
})
export class ArtistInfoComponent{
  constructor(private apiService:ApiCallerService) {
  }



  @Input() artist!:ArtistObject;

  returnToSearchHandler(){
    DomUtil.scrollIntoView("artist-search-wrapper")
  }

  addToPickHandler(): void {

    const artistPick:Artist={
      artistId:0,
      name: this.artist.name,
      country:"PH",
      spotifyId:this.artist.id,
      imageUrl:this.artist.images[0].url,
      genreList:this.artist.genres,
    }

    this.apiService.postWithBearer(UrlConstant.artistBase, artistPick).subscribe({
      next: (v) => {
        console.log(v.data);
      },
      error: (e) => {
        console.log(e.error.message)
      },
      complete: () => console.info('complete'),
    });
  }





}
