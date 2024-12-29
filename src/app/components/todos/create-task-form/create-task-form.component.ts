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
import { MatIcon } from '@angular/material/icon';
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-create-task-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInput,
    MatFormField,
    MatLabel,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIcon,
    MatError,
    MatDialogClose,
  ],
  templateUrl: './create-task-form.component.html',
  styleUrl: './create-task-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTaskFormComponent {
  @Output()
  createTodo = new EventEmitter();

  completed: boolean = false;

  public form = new FormGroup({
    completed: new FormControl(this.completed),
    title: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
    ]),
    userId: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  public submitForm(): void {
    this.createTodo.emit(this.form.value);
    this.form.reset();
  }
  //==========
  // readonly dialogRef = inject(MatDialogRef<CreateTaskFormComponent>);
  // readonly data = inject(MAT_DIALOG_DATA);
}
