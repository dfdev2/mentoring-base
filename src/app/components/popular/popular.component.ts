import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [NgFor],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss',
})
export class PopularComponent {
  productСard = [
    {
      news: true,
      discount: true,
      discountCount: 5,
      img: '../assets/popular/',
      productName: '',
      article: 100004,
      oldPrice: 25,
      newPrice: 15,
    },
  ];
}
