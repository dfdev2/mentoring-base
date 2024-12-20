import { Component, inject } from '@angular/core';
import { TodoApiService } from '../../services/todos-api.service';
import { Todo } from '../../interfaces/todo.interface';
import { NgFor } from '@angular/common';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor, TodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent {
  readonly todoApiService = inject(TodoApiService);
  todosList: Todo[] = [];

  constructor() {
    this.todoApiService.getTodos().subscribe((response: any) => {
      this.todosList = response.slice(0, 20);
    });
  }

  delTodo = (id: number) => {
    this.todosList = this.todosList.filter((item) => item.id !== id);
  };
}
