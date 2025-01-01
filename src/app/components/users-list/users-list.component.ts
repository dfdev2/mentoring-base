import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
} from '@angular/core';
import { UsersApiService } from '../../services/users-api.service';
import { User } from '../../interfaces/user.interface';
import { AsyncPipe, NgFor } from '@angular/common';
import { UserCardComponent } from './user-card/user-card.component';
import { CreateUserFormComponent } from './create-user-form/create-user-form.component';
import { CreateUser } from '../../interfaces/createUser.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { GreenHover } from '../../directives/green-hover.directive';
import { Store } from '@ngrx/store';
import { UsersActions } from './store/users.actions';
import { selectUsers } from './store/users.selectors';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    NgFor,
    UserCardComponent,
    AsyncPipe,
    MatDialogModule,
    MatButtonModule,
    GreenHover,
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  readonly createUserDialog = inject(MatDialog);
  private readonly store = inject(Store);
  private _snackBar = inject(MatSnackBar);
  public readonly users$ = this.store.select(selectUsers);

  @Input()
  form!: CreateUser;

  @Output()
  readonly messege = new EventEmitter();
  durationInSeconds = 2;

  constructor() {
    this.usersApiService.getUsers().subscribe((response: User[]) => {
      this.store.dispatch(UsersActions.set({ users: response }));
    });
  }

  public deleteUser(deleteUser: User) {
    this.store.dispatch(UsersActions.delete({ id: deleteUser.id }));
    this.openSnackBar('User' + ' ' + deleteUser.name + ' ' + 'deleted');
  }

  public editUser(user: CreateUser) {
    this.store.dispatch(
      UsersActions.edit({
        user: {
          ...user,
          company: {
            name: user.companyName,
          },
        },
      })
    );
    this.openSnackBar('User' + ' ' + user.name + ' ' + 'edited');
  }

  openUserCreateDialog(): void {
    const dialogRef = this.createUserDialog.open(CreateUserFormComponent, {});

    dialogRef.afterClosed().subscribe((createResult: CreateUser) => {
      if (createResult) {
        this.store.dispatch(
          UsersActions.create({
            user: {
              id: new Date().getTime(),
              name: createResult.name,
              email: createResult.email,
              website: createResult.website,
              company: {
                name: createResult.companyName,
              },
            },
          })
        );
      }
      this.openSnackBar('User' + ' ' + createResult.name + ' ' + 'created');
    });
  }

  openSnackBar(messege: string): void {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data: messege,
    });
  }
}
