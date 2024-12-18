import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsersListComponent } from './components/users-list/usersList.component';

const newPages: number[] = [5, 4, 3, 2, 1];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RouterLink,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    UsersListComponent,
    UsersListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'routing-app';
}
