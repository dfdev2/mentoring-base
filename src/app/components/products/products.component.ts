import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
const newPages: number[] = [5, 4, 3, 2, 1];

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  pagesPagination = newPages;
}
