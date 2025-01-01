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
import { CleanPhone } from '../../../pipes/cleanPhone.pipe';
import { ShadowHover } from '../../../directives/shadow-hover.directive';
import { GreenHover } from '../../../directives/green-hover.directive';
import { RedHover } from '../../../directives/red-hover.directive';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatButton,
    CleanPhone,
    ShadowHover,
    GreenHover,
    RedHover,
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
  editUser = new EventEmitter();

  @Output()
  deleteUser = new EventEmitter();

  onEditUser(): void {
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
