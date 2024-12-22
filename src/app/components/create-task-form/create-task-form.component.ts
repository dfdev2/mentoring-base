import { Component, EventEmitter, Output } from '@angular/core';
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
})
export class CreateTaskFormComponent {
  // Отправка данных наружу
  @Output()
  createTodo = new EventEmitter();

  //
  onButtonClick(): void {
    console.log('Кнопка была нажата!');
  }
  //

  // Данные с формы с валидацией
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
