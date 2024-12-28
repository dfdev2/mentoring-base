import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatFormField, MatInput } from "@angular/material/input";
import {
  MatError,
  MatFormFieldModule,
  MatLabel,
} from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import { MatDialogClose } from "@angular/material/dialog";
@Component({
  selector: "app-create-user-form",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInput,
    MatFormField,
    MatLabel,
    MatFormFieldModule,
    MatIcon,
    MatError,
    MatDialogClose,
  ],
  templateUrl: "./create-user-form.component.html",
  styleUrl: "./create-user-form.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUserFormComponent {
  // Отправка данных наружу
  // @Output()
  // createUser = new EventEmitter();
  // readonly data = inject<{ user: any }>(MAT_DIALOG_DATA);

  // Данные с формы с валидатором
  public form = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    website: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
    companyName: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  // Передача данных с формы
  public submitForm(input: HTMLInputElement) {
    // this.createUser.emit(this.form.value);
    // console.log("Submit form create user", this.form.value);
    this.form.reset();
    input.blur();
  }

  constructor() {
    // подписка на изменения формы
    // this.form.valueChanges.subscribe((formValue) => console.log(formValue));
  }
}
