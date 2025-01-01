import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  inject,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormField, MatInput } from '@angular/material/input';
import {
  MatError,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { Todo } from '../../../interfaces/todo.interface';

@Component({
  selector: 'app-edit-todo-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInput,
    MatFormField,
    MatLabel,
    MatFormFieldModule,
    MatCheckboxModule,
    MatError,
    MatDialogClose,
  ],
  templateUrl: './edit-todo-dialog.component.html',
  styleUrl: './edit-todo-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditTodoDialogComponent {
  readonly data = inject<{ todo: Todo }>(MAT_DIALOG_DATA);

  complated = this.data.todo.completed;

  public form = new FormGroup({
    completed: new FormControl(this.data.todo.completed),
    title: new FormControl(this.data.todo.title, [
      Validators.required,
      Validators.minLength(5),
    ]),
    userId: new FormControl(this.data.todo.userId, [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  get todoWithUpdatedFields() {
    return {
      ...this.form.value,
      id: this.data.todo.id,
    };
  }
}
