import { Injectable } from "@angular/core";
import { User } from "../interfaces/user.interface";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: "root" })
export class UsersService {
  // это относится к RXJS реактивная переменная
  usersSubject$ = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject$.asObservable();

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
    // Пробегаемся по массиву если email есть выводим сообшение
    // такой email уже есть если нет добавляем нового юсера
    const existingUser = this.usersSubject$.value.find(
      (currentElement) => currentElement.email === user.email
    );
    if (existingUser !== undefined) {
      // alert('This E-Mail is already registered');
    } else {
      this.usersSubject$.next([...this.usersSubject$.value, user]);
      // alert('New User added successfully');
    }
  }

  deleteUser(id: number) {
    this.usersSubject$.next(
      this.usersSubject$.value.filter((item) => item.id !== id)
    );
  }
}
