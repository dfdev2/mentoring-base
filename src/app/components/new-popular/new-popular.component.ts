import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-new-popular',
  standalone: true,
  imports: [],
  templateUrl: './new-popular.component.html',
  styleUrl: './new-popular.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPopularComponent {}
