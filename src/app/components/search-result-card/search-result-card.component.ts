import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForOf, NgStyle} from "@angular/common";
import {ArtistObject} from "../../domain/ArtistSearchObject";


@Component({
  selector: 'app-search-result-card',
  standalone: true,
  imports: [
    NgStyle,
    NgForOf
  ],
  templateUrl: './search-result-card.component.html',
  styleUrl: './search-result-card.component.scss'
})
export class SearchResultCardComponent implements OnInit{
  @Input() artist!:ArtistObject;
  imageUrl = "https://i.scdn.co/image/ab67616100005174b10c34546a4ca2d7faeb8865";


  @Output() selectEvent  = new EventEmitter<ArtistObject>();


  triggerSelect(){
    this.selectEvent.emit(this.artist)
  }




  ngOnInit(): void {
    this.imageUrl = this.artist.images[0].url;
  }

}
