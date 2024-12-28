import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
} from '@angular/core';
import { User } from '../../../interfaces/user.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { CreateUser } from '../../../interfaces/createUser.interface';
import { DeleteUserDialogComponent } from '../delete-user-dialog/delete-user-dialog.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatButton,
  ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {
  readonly deleteUserDialog = inject(MatDialog);
  readonly editUserDialog = inject(MatDialog);

  @Input()
  userItem!: User;

  @Output()
  deleteUser = new EventEmitter();

  @Output()
  editUser = new EventEmitter();

  onDeleteUser(userId: number) {
    this.deleteUser.emit(userId);
  }

  openDialog(): void {
    const dialogRef = this.editUserDialog.open(EditUserDialogComponent, {
      data: { user: this.userItem },
    });

    dialogRef.afterClosed().subscribe((editResult: CreateUser) => {
      if (!editResult) return;
      this.editUser.emit(editResult);
    });
  }

  onDeleteUserDialog() {
    const dialogRef = this.deleteUserDialog.open(DeleteUserDialogComponent, {
      data: { user: this.userItem },
    });

    dialogRef.afterClosed().subscribe((deleteResult: User | boolean) => {
      if (deleteResult) {
        this.deleteUser.emit(deleteResult);
      }
    });
  }
}
