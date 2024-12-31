import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
} from '@angular/material/dialog';

@Component({
  selector: 'app-ask-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
    MatDialogClose,
  ],
  templateUrl: './ask-dialog.component.html',
  styleUrl: './ask-dialog.component.scss',
})
export class AskDialogComponent {}
