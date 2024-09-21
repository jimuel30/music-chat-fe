import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchBarComponent} from "../search-bar/search-bar.component";
import {UrlConstant} from "../../constants/UrlConstant";
import {ApiCallerService} from "../../services/api-caller.service";
import {SearchResultCardComponent} from "../search-result-card/search-result-card.component";
import {NgForOf, NgIf} from "@angular/common";
import {ArtistObject} from "../../domain/ArtistSearchObject";
import {ArtistInfoComponent} from "../artist-info/artist-info.component";
import {DomUtil} from "../../util/DomUtil";


@Component({
  selector: 'app-add-pick-form',
  standalone: true,
  imports: [
    SearchBarComponent,
    SearchResultCardComponent,
    NgForOf,
    ArtistInfoComponent,
    NgIf
  ],
  templateUrl: './add-pick-form.component.html',
  styleUrl: './add-pick-form.component.scss'
})


export class AddPickFormComponent{

  @Output() hideEvent  = new EventEmitter<boolean>();

  constructor(private apiService:ApiCallerService) {
  }

  searchResult:ArtistObject[]  =  [];
  artist!:ArtistObject;
  showArtistInfo  = false;

  triggerHide(){
    this.hideEvent.emit(false)
  }


  showArtistInfoHandler(selectedArtist:ArtistObject){
    this.artist = selectedArtist;
    this.showArtistInfo = true;
    DomUtil.scrollIntoView("artist-info");
  }










  searchHandler(artistName:string): void {

    console.log("URL: "+UrlConstant.searchArtist+artistName)


    this.apiService.getWithoutBearer(UrlConstant.searchArtist+artistName).subscribe({
      next: (v) => {
        console.log(v.data);
        this.searchResult = v.data;
        localStorage.setItem("artist",JSON.stringify(v.data))
        DomUtil.scrollIntoView("artist-search-wrapper")
      },
      error: (e) => {
        console.log(e.error.message)
        DomUtil.scrollIntoView("artist-search-wrapper")
      },
      complete: () => console.info('complete'),
    });
  }

  // ngOnInit(): void {
  //
  //
  //   const storedArtists = localStorage.getItem('artist');
  //   if (storedArtists) {
  //     this.searchResult = JSON.parse(storedArtists);
  //   }
  // }
}
