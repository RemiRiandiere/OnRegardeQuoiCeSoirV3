import { Component, OnInit } from '@angular/core';
import { FilmInfo } from '../models/film-info.model';
import { GetFilmService } from '../services/get-film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css'],
})
export class FilmListComponent implements OnInit {
  movies: FilmInfo[];

  constructor(private filmService: GetFilmService) {}

  ngOnInit() {
    this.movies = this.filmService.getMovieList();
  }
}
