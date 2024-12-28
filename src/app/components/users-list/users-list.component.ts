import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
} from "@angular/core";
import { UsersApiService } from "../../services/users-api.service";
import { User } from "../../interfaces/user.interface";
import { AsyncPipe, NgFor } from "@angular/common";
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersService } from "../../services/users.servece";
import { CreateUserFormComponent } from "../create-user-form/create-user-form.component";
import { CreateUser } from "../../interfaces/createUser.interface";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackBarComponent } from "../snack-bar/snack-bar.component";

@Component({
  selector: "app-users-list",
  standalone: true,
  imports: [
    NgFor,
    UserCardComponent,
    AsyncPipe,
    MatDialogModule,
    MatButtonModule,
  ],
  templateUrl: "./users-list.component.html",
  styleUrl: "./users-list.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  readonly usersService = inject(UsersService);
  readonly createUserDialog = inject(MatDialog);
  @Input()
  form!: CreateUser;

  constructor() {
    // Получение данных с сервера через usersApiServer
    this.usersApiService.getUsers().subscribe((response: User[]) => {
      this.usersService.setUsers(response);
    });
    // Подписались на изменения в массиве userService.users$
    // this.usersService.users$.subscribe((users) => console.log(users));
  }

  public deleteUser(deleteUser: User) {
    // передача ID в сервисы deleteUser
    this.usersService.deleteUser(deleteUser.id);
    this.openSnackBar("User" + " " + deleteUser.name + " " + "deleted");
  }

  // принемает user из перехвата на html
  public editUser(user: CreateUser) {
    // добавляем не достающее свойство в массив и
    // передача данных в сервисы editUser
    this.usersService.editUser({
      ...user,
      company: {
        name: user.companyName,
      },
    });
    this.openSnackBar("User" + " " + user.name + " " + "edited");
  }

  openUserCreateDialog(): void {
    const dialogRef = this.createUserDialog.open(CreateUserFormComponent, {
      // data: { newUser: this.form },
    });

    dialogRef.afterClosed().subscribe((createResult: CreateUser) => {
      if (createResult) {
        this.openSnackBar("User" + " " + createResult.name + " " + "created");
        this.usersService.createUser({
          id: new Date().getTime(),
          name: createResult.name,
          email: createResult.email,
          website: createResult.website,
          company: {
            name: createResult.companyName,
          },
        });
      }

      // console.log("The dialog was closed", createResult);
    });
  }
  //=======

  private _snackBar = inject(MatSnackBar);
  durationInSeconds = 2;

  @Output()
  readonly messege = new EventEmitter();

  openSnackBar(messege: string): void {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data: messege,
    });
  }
}
