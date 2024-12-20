import { Component, inject } from '@angular/core';
import { UsersApiService } from '../../services/users-api.service';
import { User } from '../../interfaces/user.interface';
import { NgFor } from '@angular/common';
import { UserCardComponent } from './user-card/user-card.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgFor, UserCardComponent],
  templateUrl: './usersList.component.html',
  styleUrl: './usersList.component.scss',
})
export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  usersList: User[] = [];

  constructor() {
    this.usersApiService.getUsers().subscribe((response: any) => {
      this.usersList = response;
    });
  }

  delUser = (id: number) => {
    this.usersList = this.usersList.filter((item) => item.id !== id);
  };
}
