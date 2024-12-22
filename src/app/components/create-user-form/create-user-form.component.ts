import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { FormButtonComponent } from '../../shared/form-button/form-button.component';
@Component({
  selector: 'app-create-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, FormButtonComponent],
  templateUrl: './create-user-form.component.html',
  styleUrl: './create-user-form.component.scss',
})
export class CreateUserFormComponent {
  // Отправка данных наружу
  @Output()
  createUser = new EventEmitter();

  // Данные с формы с валидатором
  public form = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    website: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
    company: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  public submitForm() {
    // Передача данных с формы
    this.createUser.emit(this.form.value);
    this.form.reset();
  }

  constructor() {
    // подписка на изменения формы
    this.form.valueChanges.subscribe((formValue) => console.log(formValue));
  }
}
