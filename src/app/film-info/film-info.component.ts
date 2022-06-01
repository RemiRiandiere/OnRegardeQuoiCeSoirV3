import { Component, Input, OnInit } from '@angular/core';
import { FilmInfo } from '../models/film-info.model';

@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styleUrls: ['./film-info.component.css']
})
export class FilmInfoComponent implements OnInit {

  @Input() movie: FilmInfo;

  constructor() { }

  ngOnInit() {
    
  }

}