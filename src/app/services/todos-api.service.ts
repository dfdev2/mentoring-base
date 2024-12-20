import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';

@Injectable({ providedIn: 'root' })
export class TodoApiService {
  readonly todoApiService = inject(HttpClient);

  getTodos() {
    return this.todoApiService.get<Todo[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );
  }
}
