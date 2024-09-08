import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-error-warner',
  standalone: true,
  imports: [],
  templateUrl: './error-warner.component.html',
  styleUrl: './error-warner.component.scss'
})
export class ErrorWarnerComponent implements OnInit{

  @Input() errorMessage!:string;

  ngOnInit(): void {
    console.log("Error Message comp: "+this.errorMessage)
  }

}
