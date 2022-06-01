import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FilmInfo } from '../models/film-info.model';
import { ActorInfo } from '../models/actor-info.model';

@Injectable({
  providedIn: 'root',
})
export class GetFilmService {
  movieList: FilmInfo[];

  constructor(private http: HttpClient) {
    this.movieList = new Array<FilmInfo>();
    this.fillMovieList(50);
  }

  private getMovie(page_number: Number) {
    return this.http.get(
      'https://api.themoviedb.org/3/discover/movie?api_key=459b8720d2105e32a82ca5ace74f4785&language=fr-FR&sort_by=vote_count.desc&include_adult=false&include_video=false&page=' +
        page_number +
        '&with_original_language=en'
    );
  }

  private fillMovieList(number_of_page: Number) {
    for (let i = 1; i <= number_of_page; i++) {
      this.getMovie(i).subscribe((data: any) => {
        let moviesJson = data['results'];
        for (let movie of moviesJson) {
          this.movieList.push(
            new FilmInfo(
              movie['title'],
              movie['overview'],
              'https://image.tmdb.org/t/p/original' + movie['poster_path'],
              new Date(movie['release_date'])
            )
          );
        }
      });
    }
  }

  private getActors(movie_id: number): Array<ActorInfo> {
    let url =
      'https://api.themoviedb.org/3/movie/' +
      movie_id +
      '/credits?api_key=459b8720d2105e32a82ca5ace74f4785&language=fr-FR';
    const actorList = new Array<ActorInfo>();
    this.http.get(url).subscribe((data: any) => {
      let actorsJson = data['cast'];
      for (let i = 0; i < 6; i++) {
        actorList.push(
          new ActorInfo(actorsJson[i]['name'], actorsJson[i]['character'])
        );
      }
    });
    return actorList;
  }

  public getMovieList() {
    return this.movieList;
  }
}
