import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
} from '@angular/core';
import { Todo } from '../../../interfaces/todo.interface';
import { ShortTitle } from '../../../pipes/short-title.pipe';
import { MatDialog } from '@angular/material/dialog';
import { DeleteTodoDialogComponent } from '../delete-todo-dialog/delete-todo-dialog.component';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgIf, ShortTitle],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoCardComponent {
  readonly deleteTodoDialog = inject(MatDialog);
  readonly editTodoDialog = inject(MatDialog);

  @Input()
  todoItem!: Todo;

  @Output()
  editTodo = new EventEmitter();

  @Output()
  deleteTodo = new EventEmitter();

  onEditTodoDialog(): void {
    const dialogRef = this.editTodoDialog.open(EditTodoDialogComponent, {
      data: { todo: this.todoItem },
    });

    dialogRef.afterClosed().subscribe((editResult: Todo) => {
      if (!editResult) return;
      this.editTodo.emit(editResult);
    });
  }

  onDeleteTodoDialog() {
    const dialogRef = this.deleteTodoDialog.open(DeleteTodoDialogComponent, {
      data: { todo: this.todoItem },
    });

    dialogRef.afterClosed().subscribe((deleteResult: Todo | boolean) => {
      if (deleteResult) {
        this.deleteTodo.emit(deleteResult);
      }
    });
  }
}
