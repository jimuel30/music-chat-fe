import {Component, OnInit} from '@angular/core';
import {ApiCallerService} from "../../services/api-caller.service";
import {Artist} from "../../domain/Artist";
import {UrlConstant} from "../../constants/UrlConstant";
import {ArtistBoxComponent} from "../artist-box/artist-box.component";
import {NgForOf, NgIf} from "@angular/common";
import {AddPickFormComponent} from "../add-pick-form/add-pick-form.component";


@Component({
  selector: 'app-artists-section',
  standalone: true,
  imports: [
    ArtistBoxComponent,
    NgForOf,
    AddPickFormComponent,
    NgIf
  ],
  templateUrl: './artists-section.component.html',
  styleUrl: './artists-section.component.scss'
})
export class ArtistsSectionComponent implements OnInit{

   artistList!:Artist[];

   showAddPickForm: boolean = false;




  constructor(private apiService:ApiCallerService) {
  }
  ngOnInit(): void {
     this.getArtistsHandler();
  }

  toggleAddPickForm(): void {
    this.showAddPickForm = !this.showAddPickForm;
  }

  hideAddPickForm(show:boolean){
    this.showAddPickForm = show;
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
