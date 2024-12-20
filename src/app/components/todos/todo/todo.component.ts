import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgIf],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  @Input()
  todoItem: any;

  @Output()
  deleteTodo = new EventEmitter();

  onDeleteTodo() {
    this.deleteTodo.emit();
  }
}
