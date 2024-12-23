import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormButtonComponent } from '../../shared/form-button/form-button.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-create-task-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormButtonComponent, NgIf],
  templateUrl: './create-task-form.component.html',
  styleUrl: './create-task-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTaskFormComponent {
  @Output()
  createTodo = new EventEmitter();

  public form = new FormGroup({
    completed: new FormControl(),
    id: new FormControl(),
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
  }
}
