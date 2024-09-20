import {Component, OnInit} from '@angular/core';
import {SearchBarComponent} from "../search-bar/search-bar.component";
import {UrlConstant} from "../../constants/UrlConstant";
import {ApiCallerService} from "../../services/api-caller.service";
import {SearchResultCardComponent} from "../search-result-card/search-result-card.component";
import {NgForOf} from "@angular/common";
import {ArtistObject} from "../../domain/ArtistSearchObject";
import {ArtistInfoComponent} from "../artist-info/artist-info.component";


@Component({
  selector: 'app-add-pick-form',
  standalone: true,
  imports: [
    SearchBarComponent,
    SearchResultCardComponent,
    NgForOf,
    ArtistInfoComponent
  ],
  templateUrl: './add-pick-form.component.html',
  styleUrl: './add-pick-form.component.scss'
})


export class AddPickFormComponent implements OnInit{

  constructor(private apiService:ApiCallerService) {
  }

  searchResult:ArtistObject[]  =  [];


  searchHandler(artistName:string): void {

    console.log("URL: "+UrlConstant.searchArtist+artistName)

    this.apiService.getWithoutBearer(UrlConstant.searchArtist+artistName).subscribe({
      next: (v) => {
        console.log(v.data);
        this.searchResult = v.data;
        localStorage.setItem("artist",JSON.stringify(v.data))
      },
      error: (e) => {
        console.log(e.error.message)
      },
      complete: () => console.info('complete'),
    });
  }

  ngOnInit(): void {


    const storedArtists = localStorage.getItem('artist');
    if (storedArtists) {
      this.searchResult = JSON.parse(storedArtists);
    }
  }
}
