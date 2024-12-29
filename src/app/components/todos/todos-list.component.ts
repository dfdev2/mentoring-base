import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  inject,
} from '@angular/core';
import { TodoApiService } from '../../services/todos-api.service';
import { Todo } from '../../interfaces/todo.interface';
import { AsyncPipe, NgFor } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodosService } from '../../services/todos.servece';
import { CreateTaskFormComponent } from './create-task-form/create-task-form.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TodosSnackBarComponent } from './todos-snack-bar/todos-snack-bar.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    NgFor,
    TodoCardComponent,
    AsyncPipe,
    MatDialogModule,
    MatButtonModule,
  ],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {
  readonly todoApiService = inject(TodoApiService);
  readonly todosServices = inject(TodosService);

  // @Output()
  // readonly messege = new EventEmitter();

  private _snackBar = inject(MatSnackBar);
  durationInSeconds = 2;

  constructor() {
    this.todoApiService.getTodos().subscribe((response: Todo[]) => {
      this.todosServices.setTodos(response.slice(0, 6));
    });
  }

  deleteTodo = (id: number) => {
    this.todosServices.deleteTodo(id);
  };

  readonly dialog = inject(MatDialog);

  public openDialog(): void {
    const dialogRef = this.dialog.open(CreateTaskFormComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('The dialog was closed', result);
        this.todosServices.createTodo({
          completed: result.completed,
          id: new Date().getTime(),
          title: result.title,
          userId: result.userId,
        });
        this.openSnackBar('Todo created');
      }
    });
  }

  public openSnackBar(messege: string): void {
    this._snackBar.openFromComponent(TodosSnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data: messege,
    });
  }
}
