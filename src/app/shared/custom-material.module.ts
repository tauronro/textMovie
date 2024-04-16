import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSnackBarModule,
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSnackBarModule,
  ],
})
export class CustomMaterialModule {}
