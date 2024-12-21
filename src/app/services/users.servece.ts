import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersService {
  // это относится к RXJS реактивная переменная
  usersSubject$ = new BehaviorSubject<User[]>([]);

  setUsers(users: User[]) {
    // next типо заменяет =
    this.usersSubject$.next(users);
  }

  editUser(editedUser: User) {
    this.usersSubject$.next(
      this.usersSubject$.value.map((user) => {
        if (user.id === editedUser.id) {
          return editedUser;
        } else {
          return user;
        }
      })
    );
  }

  createUser(user: User) {
    this.usersSubject$.next([...this.usersSubject$.value, user]);
  }

  deleteUser(id: number) {
    this.usersSubject$.next(
      this.usersSubject$.value.filter((item) => item.id !== id)
    );
  }
}
