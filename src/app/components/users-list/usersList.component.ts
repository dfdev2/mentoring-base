import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './usersList.component.html',
  styleUrl: './usersList.component.scss',
})
export class UsersListComponent {
  readonly apiService = inject(HttpClient);
  APIURL: string = 'https://jsonplaceholder.typicode.com/users';
  usersList: User[] = [];

  constructor() {
    this.apiService.get<User[]>(this.APIURL).subscribe((response) => {
      this.usersList = response;
      console.log(response);
    });
  }
}
