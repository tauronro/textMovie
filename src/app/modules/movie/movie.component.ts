import { Observable, of } from 'rxjs';

import { Component, inject } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MovieService } from 'src/app/services/movie.service';
import { MovieResponse } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  private movieService: MovieService = inject(MovieService);
  public pageIndex: number = 1;
  public movies: Observable<MovieResponse> = of({
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  });

  search(target: EventTarget | null, page: number = 1) {
    const element = target as HTMLInputElement;

    if (element.value.length > 2)
      this.movies = this.movieService.search(element.value, page);
  }

  handlePageEvent(e: PageEvent) {
    this.pageIndex = e.pageIndex;
  }
}
