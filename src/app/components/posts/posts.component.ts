import { Component } from '@angular/core';
import { CleanPhone } from '../../pipes/cleanPhone.pipe';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CleanPhone],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent {}
