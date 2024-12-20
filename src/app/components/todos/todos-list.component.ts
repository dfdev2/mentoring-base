import { Component, inject } from '@angular/core';
import { TodoApiService } from '../../services/todos-api.service';
import { Todo } from '../../interfaces/todo.interface';
import { NgFor } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor, TodoCardComponent],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
})
export class TodosListComponent {
  readonly todoApiService = inject(TodoApiService);
  todosList: Todo[] = [];

  constructor() {
    this.todoApiService.getTodos().subscribe((response: Todo[]) => {
      this.todosList = response.slice(0, 20);
    });
  }

  deleteTodo = (id: number) => {
    this.todosList = this.todosList.filter((item) => item.id !== id);
  };
}
