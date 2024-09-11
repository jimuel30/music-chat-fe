import {Component, OnInit} from '@angular/core';
import {ApiCallerService} from "../../services/api-caller.service";
import {Artist} from "../../domain/Artist";
import {UrlConstant} from "../../constants/UrlConstant";
import {ArtistBoxComponent} from "../artist-box/artist-box.component";
import {NgForOf} from "@angular/common";


@Component({
  selector: 'app-artists-section',
  standalone: true,
  imports: [
    ArtistBoxComponent,
    NgForOf
  ],
  templateUrl: './artists-section.component.html',
  styleUrl: './artists-section.component.scss'
})
export class ArtistsSectionComponent implements OnInit{

   artistList!:Artist[];

  constructor(private apiService:ApiCallerService) {
  }
  ngOnInit(): void {
     this.getArtistsHandler();
  }



  getArtistsHandler(): void {
    this.apiService.getWithBearer(UrlConstant.getArtist).subscribe({
      next: (v) => {
        console.log(v.data);
        this.artistList = v.data;

      },
      error: (e) => {
        console.log(e.error.message)
      },
      complete: () => console.info('complete'),
    });
  }






}
