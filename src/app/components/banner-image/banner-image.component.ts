import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-banner-image',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './banner-image.component.html',
  styleUrl: './banner-image.component.scss'
})
export class BannerImageComponent {

}
