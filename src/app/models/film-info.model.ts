import { ActorInfo } from './actor-info.model';

export class FilmInfo {
  title: string;
  synopsis: string;
  releaseDate: Date;
  imgUrl: string;

  constructor(
    title: string,
    synopsis: string,
    imgUrl: string,
    releaseDate: Date
  ) {
    this.title = title;
    this.synopsis = synopsis;
    this.imgUrl = imgUrl;
    this.releaseDate = releaseDate;
  }
}
