import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersApiService } from '../../services/users-api.service';
import { User } from '../../interfaces/user.interface';
import { NgFor } from '@angular/common';
import { UserCardComponent } from './user-card/user-card.component';
import { UserService } from '../../services/user.servece';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgFor, UserCardComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  readonly usersService = inject(UserService);
  users = this.usersService.users;

  constructor() {
    this.usersApiService.getUsers().subscribe((response: User[]) => {
      this.usersService.setUsers(response);
      this.users = this.usersService.users;
    });
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id);
    this.users = this.usersService.users;
  }
}
