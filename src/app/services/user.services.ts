import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserRole } from '../interfaces/userRole.interface';
import { __values } from 'tslib';

@Injectable({ providedIn: 'root' })
export class UserServices {
  private readonly userSubject$ = new BehaviorSubject<UserRole | null>(null);
  public user$ = this.userSubject$.asObservable();

  private user: UserRole = {
    name: 'admin',
    email: 'admin@gmail.com',
    isAdmin: true,
  };

  loginAsAdmin() {
    this.userSubject$.next({ ...this.user, isAdmin: true });
  }
  loginAsUser() {
    this.userSubject$.next({ ...this.user, isAdmin: false });
  }

  public get isAdmin() {
    return this.userSubject$.value?.isAdmin;
  }
  public get isLogged() {
    return this.userSubject$.value !== null;
  }
  logout() {
    this.userSubject$.next(null);
  }
}
