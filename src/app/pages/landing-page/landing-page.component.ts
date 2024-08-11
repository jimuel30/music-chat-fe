import { Component } from '@angular/core';
import {BannerImageComponent} from "../../components/banner-image/banner-image.component";
import {LoginButtonComponent} from "../../components/login-button/login-button.component";
import {ButtonConfig} from "../../domain/ButtonConfig";
import {GenericButtonComponent} from "../../components/generic-button/generic-button.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    BannerImageComponent,
    LoginButtonComponent,
    GenericButtonComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {



  googleLoginConfig:ButtonConfig={
    icon:"fa-brands fa-google",
    label:"Google",
    bgColor:"#C64C4C",
    isLoading:false,
    enabled:true
  }

  spotifyLoginConfig:ButtonConfig={
    icon:"fa-brands fa-spotify",
    label:"Spotify",
    bgColor:"#1D9247",
    isLoading:false,
    enabled:true
  }

  loginViaEmailHandler(){


  }

  loginViaGoogleHandler(){

  }

  loginViaSpotifyHandler(){

  }

  toggleAllLoginButtons(){
    this.spotifyLoginConfig.enabled = !this.spotifyLoginConfig.enabled;
    this.googleLoginConfig.enabled = ! this.googleLoginConfig.enabled;

  }


}
