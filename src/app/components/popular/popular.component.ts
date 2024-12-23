import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Products } from '../../interfaces/products.interface';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularComponent {
  productcard: Products[] = [
    {
      news: true,
      discount: false,
      discountCount: 5,
      img: '../assets/popular/popular-1.png',
      productName: 'Grinding wheel 125x6x22',
      article: 100004,
      oldPrice: 25,
      newPrice: 15,
    },
    {
      news: false,
      discount: true,
      discountCount: 5,
      img: '../assets/popular/popular-1.png',
      productName: 'Grinding wheel 125',
      article: 100004,
      oldPrice: 5,
      newPrice: 15,
    },
    {
      news: true,
      discount: true,
      discountCount: 5,
      img: '../assets/popular/popular-1.png',
      productName: 'Grinding wheel 125',
      article: 100004,
      oldPrice: 5,
      newPrice: 15,
    },
    {
      news: false,
      discount: false,
      discountCount: 5,
      img: '../assets/popular/popular-1.png',
      productName: 'Grinding wheel 125125x6x22',
      article: 100004,
      oldPrice: 5,
      newPrice: 15,
    },
  ];
}
