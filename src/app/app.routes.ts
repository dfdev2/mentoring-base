import { Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/usersList.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'users',
    component: UsersListComponent,
  },
];
