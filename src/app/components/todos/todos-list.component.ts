import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodoApiService } from '../../services/todos-api.service';
import { Todo } from '../../interfaces/todo.interface';
import { AsyncPipe, NgFor } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { CreateTaskFormComponent } from './create-task-form/create-task-form.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TodosSnackBarComponent } from './todos-snack-bar/todos-snack-bar.component';
import { Store } from '@ngrx/store';
import { TodosActions } from './store/todos.actions';
import { selectTodos } from './store/todos.selectors';

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
  private _snackBar = inject(MatSnackBar);
  readonly dialog = inject(MatDialog);
  private readonly store = inject(Store);

  public readonly todos$ = this.store.select(selectTodos);
  durationInSeconds = 2;

  constructor() {
    this.todoApiService.getTodos().subscribe((response: Todo[]) => {
      this.store.dispatch(TodosActions.set({ todos: response.slice(0, 6) }));
    });
  }

  public editTodo(todo: Todo) {
    this.store.dispatch(TodosActions.edit({ todo }));
    this.openSnackBar('Todo' + ' ' + todo.userId + ' ' + 'edited');
  }

  public deleteTodo = (todo: Todo) => {
    this.store.dispatch(TodosActions.delete({ id: todo.id }));
    this.openSnackBar('Todo' + ' ' + todo.userId + ' ' + 'deleted');
  };

  public openDialog(): void {
    const dialogRef = this.dialog.open(CreateTaskFormComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.store.dispatch(
          TodosActions.create({
            todo: {
              completed: result.completed,
              id: new Date().getTime(),
              title: result.title,
              userId: result.userId,
            },
          })
        );
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
