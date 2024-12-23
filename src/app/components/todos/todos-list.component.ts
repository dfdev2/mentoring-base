import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodoApiService } from '../../services/todos-api.service';
import { Todo } from '../../interfaces/todo.interface';
import { AsyncPipe, NgFor } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodosService } from '../../services/todos.servece';
import { CreateTaskFormComponent } from '../create-task-form/create-task-form.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor, TodoCardComponent, AsyncPipe, CreateTaskFormComponent],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {
  readonly todoApiService = inject(TodoApiService);
  readonly todosServices = inject(TodosService);

  constructor() {
    this.todoApiService.getTodos().subscribe((response: Todo[]) => {
      this.todosServices.setTodos(response.slice(0, 6));
    });
  }

  deleteTodo = (id: number) => {
    this.todosServices.deleteTodo(id);
  };

  public createTodo(formData: Todo) {
    this.todosServices.createTodo({
      completed: formData.completed,
      id: new Date().getTime(),
      title: formData.title,
      userId: formData.userId,
    });
  }
}
