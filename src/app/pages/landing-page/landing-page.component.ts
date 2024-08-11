import { Component } from '@angular/core';
import {BannerImageComponent} from "../../components/banner-image/banner-image.component";
import {LoginButtonComponent} from "../../components/login-button/login-button.component";
import {RegisterButtonComponent} from "../../components/register-button/register-button.component";
import {ButtonConfig} from "../../domain/ButtonConfig";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    BannerImageComponent,
    LoginButtonComponent,
    RegisterButtonComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  emailLoginConfig:ButtonConfig={
    icon:"fa-solid fa-envelope",
    label:"Email",
    bgColor:"#008080",
    isLoading:false
  }

  googleLoginConfig:ButtonConfig={
    icon:"fa-brands fa-google",
    label:"Google",
    bgColor:"#4F86EC",
    isLoading:false
  }

  spotifyLoginConfig:ButtonConfig={
    icon:"fa-brands fa-spotify",
    label:"Spotify",
    bgColor:"#1D9247",
    isLoading:false
  }

  loginViaEmailHandler(){

  }

  loginViaGoogleHandler(){

  }

  loginViaSpotifyHandler(){

  }

}
