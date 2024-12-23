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
import { NgIf } from '@angular/common';
import { FormButtonComponent } from '../../shared/form-button/form-button.component';
@Component({
  selector: 'app-create-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, FormButtonComponent],
  templateUrl: './create-user-form.component.html',
  styleUrl: './create-user-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUserFormComponent {
  @Output()
  createUser = new EventEmitter();

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
    this.createUser.emit(this.form.value);
    this.form.reset();
  }
}
