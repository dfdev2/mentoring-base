import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopMenuList } from '../../interfaces/topMenuList.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  //  top Header
  topMenuList: TopMenuList[] = [
    { name: 'Home', link: '' },
    { name: 'Users', link: '/users' },
    { name: 'Todos', link: 'todos' },
  ];
  readonly AboutTheCompany: string = 'About the company';
  companyShow: boolean = true;
  bottomMenuList: string[] = [
    'Catalog',
    'Building materials',
    'Tools',
    'Electricity',
    'Interior and clothing',
  ];

  //  bottom Header
  menuListChanged: string[] = this.bottomMenuList;
  isUpperCase: boolean = true;
  changeButtonText: string = 'To Upper';
  buttonText: string = 'Hide';

  changeText = () => {
    this.menuListChanged = this.bottomMenuList.map((item) =>
      this.isUpperCase ? item.toLocaleUpperCase() : item.toLocaleLowerCase()
    );
    this.isUpperCase = !this.isUpperCase;
    this.changeButtonText = this.isUpperCase ? 'To Upper' : 'To Lower';
  };
}
