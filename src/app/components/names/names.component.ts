import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-names',
  standalone: true,
  imports: [],
  templateUrl: './names.component.html',
  styleUrl: './names.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NamesComponent {}
