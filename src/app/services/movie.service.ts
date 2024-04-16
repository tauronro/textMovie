import { catchError, map, of } from 'rxjs';
import { environment } from 'src/environment/environment';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Details, MovieResponse } from '../interfaces/movie.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private _snackBar: MatSnackBar = inject(MatSnackBar);
  private http: HttpClient = inject(HttpClient);

  constructor() {}

  search(query: string, page: number = 1) {
    return this.http
      .get<MovieResponse>(`${environment.apiUrl}/search/movie`, {
        params: new HttpParams().set('query', query).set('page', page),
      })
      .pipe(
        map((response) => {
          response.results.map((movie) => {
            movie.release_date = movie.release_date
              ? new Date(movie.release_date)
              : undefined;
            return movie;
          });

          return response;
        }),
        catchError(error => {
          this._snackBar.open('Error al encontrar peliculas', 'Cerrar', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
          });
          return of({
            page: 0,
            results: [],
            total_pages: 0,
            total_results: 0
          } as MovieResponse);
        })
      );
  }

  get(id: number) {
    return this.http.get<Details>(`${environment.apiUrl}/movie/${id}`);
  }
}
