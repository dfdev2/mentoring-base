import { Component, inject } from '@angular/core';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-todos-snack-bar',
  standalone: true,
  imports: [],
  templateUrl: './todos-snack-bar.component.html',
  styleUrl: './todos-snack-bar.component.scss',
})
export class TodosSnackBarComponent {
  snackBarRef = inject(MatSnackBarRef);
  data = inject(MAT_SNACK_BAR_DATA);
}
