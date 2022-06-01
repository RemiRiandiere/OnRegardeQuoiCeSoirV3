import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmListComponent } from './film-list/film-list.component';
import { LandingPageComponent } from './landing-page/landing-page-component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: LandingPageComponent },
      { path: 'movies', component: FilmListComponent },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
