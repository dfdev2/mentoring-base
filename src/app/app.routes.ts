import { Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { HomeComponent } from './components/home/home.component';
import { TodosListComponent } from './components/todos/todos-list.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'users',
    component: UsersListComponent,
  },
  {
    path: 'todos',
    component: TodosListComponent,
  },
];
