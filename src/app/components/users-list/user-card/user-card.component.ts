import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
} from "@angular/core";
import { User } from "../../../interfaces/user.interface";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { EditUserDialogComponent } from "../edit-user-dialog/edit-user-dialog.component";
import { MatButton, MatButtonModule } from "@angular/material/button";
import { CreateUser } from "../../../interfaces/createUser.interface";
import { DeleteUserDialogComponent } from "../delete-user-dialog/delete-user-dialog.component";
import { MatCardModule } from "@angular/material/card";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackBarComponent } from "../../snack-bar/snack-bar.component";

@Component({
  selector: "app-user-card",
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatButton,
  ],
  templateUrl: "./user-card.component.html",
  styleUrl: "./user-card.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {
  readonly deleteUserDialog = inject(MatDialog);
  // 2 подключаем для модалки на компоненте откуда открывается
  readonly editUserDialog = inject(MatDialog);

  // прием данных юзера из usersList.html
  @Input()
  userItem!: User;

  @Output()
  deleteUser = new EventEmitter();
  // передаем отредактированные данные на usersList и там перехватываем
  // здесь нет id юзера поэтому добавили id в get()
  @Output()
  editUser = new EventEmitter();

  onDeleteUser(userId: number) {
    this.deleteUser.emit(userId);
  }

  // 3
  openDialog(): void {
    // this.dialog.open(EditUserDialogComponent) для открытия модалки
    const dialogRef = this.editUserDialog.open(EditUserDialogComponent, {
      // передача данных на модалку прием
      // data = inject<{ user: User }>(MAT_DIALOG_DATA);
      data: { user: this.userItem },
    });

    dialogRef.afterClosed().subscribe((editResult: CreateUser) => {
      // здесь может быть undefined поэтому это нужно
      if (!editResult) return;
      // данные с юзером отредактированные emit передает данные в @Output()
      this.editUser.emit(editResult);
    });
  }
  // =========
  onDeleteUserDialog() {
    // this.dialog.open(EditUserDialogComponent) для открытия модалки
    const dialogRef = this.deleteUserDialog.open(DeleteUserDialogComponent, {
      // передача данных на модалку прием
      // data = inject<{ user: User }>(MAT_DIALOG_DATA);

      data: { user: this.userItem },
    });

    dialogRef.afterClosed().subscribe((deleteResult: User | boolean) => {
      // здесь может быть undefined поэтому это нужно
      // данные с юзером emit передает данные в @Output()
      if (deleteResult) {
        this.deleteUser.emit(deleteResult);
      }
    });
  }
}
