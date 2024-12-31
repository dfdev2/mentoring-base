import { Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { HomeComponent } from './components/home/home.component';
import { TodosListComponent } from './components/todos/todos-list.component';
import { isAdminGuard } from './guards/admin.guard';
import { AdminComponent } from './components/admin/admin.component';

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
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [isAdminGuard],
  },
];
