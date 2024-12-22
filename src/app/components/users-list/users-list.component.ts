import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersApiService } from '../../services/users-api.service';
import { User } from '../../interfaces/user.interface';
import { AsyncPipe, NgFor } from '@angular/common';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersService } from '../../services/users.servece';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgFor, UserCardComponent, AsyncPipe, CreateUserFormComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  readonly usersService = inject(UsersService);

  constructor() {
    // Получение данных с сервера через usersApiServer
    this.usersApiService.getUsers().subscribe((response: User[]) => {
      this.usersService.setUsers(response);
    });
    // Подписались на изменения в массиве userService.users$
    this.usersService.users$.subscribe((users) => console.log(users));
  }

  public deleteUser(id: number) {
    // передача ID в сервисы deleteUser
    this.usersService.deleteUser(id);
  }

  public createUser(formData: User) {
    // передача данных в сервисы createUser
    this.usersService.createUser({
      id: new Date().getTime(),
      name: formData.name,
      email: formData.email,
      website: formData.website,
      company: {
        name: formData.company.name,
      },
    });
  }
}
