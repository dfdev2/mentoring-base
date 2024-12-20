import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TodoApiService {
  readonly todoApiService = inject(HttpClient);

  getTodos() {
    return this.todoApiService.get(
      'https://jsonplaceholder.typicode.com/todos'
    );
  }
}
