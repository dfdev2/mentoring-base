import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../../interfaces/todo.interface';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgIf],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
})
export class TodoCardComponent {
  @Input()
  todoItem!: Todo;

  @Output()
  deleteTodo = new EventEmitter<number>();

  onDeleteTodo(todoId: number) {
    this.deleteTodo.emit(todoId);
  }
}
