import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodosService {
  // это относится к RXJS реактивная переменная
  todosSubject$ = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todosSubject$.asObservable();

  setTodos(todos: Todo[]) {
    // next типо заменяет =
    this.todosSubject$.next(todos);
  }

  editTodo(editedTodo: Todo) {
    this.todosSubject$.next(
      this.todosSubject$.value.map((todo) => {
        if (todo.id === editedTodo.id) {
          return editedTodo;
        } else {
          return todo;
        }
      })
    );
  }

  createTodo(todo: Todo) {
    this.todosSubject$.next([...this.todosSubject$.value, todo]);
    alert('New Todo added successfully');
  }

  deleteTodo(id: number) {
    this.todosSubject$.next(
      this.todosSubject$.value.filter((item) => item.id !== id)
    );
  }
}
