import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Products } from '../../interfaces/products.interface';
import { productcard } from '../../data/populars';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularComponent {
  readonly productcard: Products[] = productcard;
}
