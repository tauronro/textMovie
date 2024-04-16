import { DetailComponent } from './pages/detail/detail.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MovieComponent } from './movie.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieRoutingModule } from './movie-routing.module';

@NgModule({
  declarations: [MovieComponent, DetailComponent],
  imports: [CommonModule, SharedModule, MovieRoutingModule],
})
export class MovieModule {}
