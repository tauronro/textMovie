import { Observable, of } from 'rxjs';

import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Details } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private movieService: MovieService = inject(MovieService);
  public movie: Observable<Details> = of();

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (paramMap) => (this.movie = this.movieService.get(+paramMap.get('id')!))
    );
  }
}
