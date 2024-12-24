import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form-fild',
  standalone: true,
  imports: [MatInputModule, MatIconModule],
  templateUrl: './form-fild.component.html',
  styleUrl: './form-fild.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFildComponent {}
