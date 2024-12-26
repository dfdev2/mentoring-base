import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
} from '@angular/core';
import { User } from '../../../interfaces/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { CreateUser } from '../../../interfaces/createUser.interface';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [EditUserDialogComponent, MatButtonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {
  @Input()
  userItem!: User;

  @Output()
  deleteUser = new EventEmitter();

  @Output()
  editUser = new EventEmitter();

  onDeleteUser(userId: number) {
    this.deleteUser.emit(userId);
  }

  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: { user: this.userItem },
    });

    dialogRef.afterClosed().subscribe((editResult: CreateUser) => {
      if (!editResult) return;
      this.editUser.emit(editResult);
    });
  }
}
