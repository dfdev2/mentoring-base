import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  topMenuList = ['Home', 'Ábout', 'Catalog'];
  bottomMenuList = [
    'Catalog',
    'Building materials',
    'Tools',
    'Electricity',
    'Interior and clothing',
  ];
}
