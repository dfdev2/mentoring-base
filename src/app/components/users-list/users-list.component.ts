import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersApiService } from '../../services/users-api.service';
import { User } from '../../interfaces/user.interface';
import { AsyncPipe, NgFor } from '@angular/common';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersService } from '../../services/users.servece';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgFor, UserCardComponent, AsyncPipe],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  readonly usersService = inject(UsersService);

  constructor() {
    this.usersApiService.getUsers().subscribe((response: User[]) => {
      this.usersService.setUsers(response);
    });
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id);
  }
}
