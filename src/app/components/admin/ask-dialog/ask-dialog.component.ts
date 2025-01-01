import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose } from '@angular/material/dialog';

@Component({
  selector: 'app-ask-dialog',
  standalone: true,
  imports: [MatDialogActions, MatButtonModule, MatDialogClose],
  templateUrl: './ask-dialog.component.html',
  styleUrl: './ask-dialog.component.scss',
})
export class AskDialogComponent {}
