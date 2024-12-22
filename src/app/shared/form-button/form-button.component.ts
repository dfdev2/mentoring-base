import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-button',
  standalone: true,
  imports: [],
  templateUrl: './form-button.component.html',
  styleUrl: './form-button.component.scss',
})
export class FormButtonComponent {
  @Input() buttonText: string = '';
  @Input() disabled: boolean = true;
  @Input() type: string = '';
}
