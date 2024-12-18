import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const bottomMenuList: string[] = [
  'Catalog',
  'Building materials',
  'Tools',
  'Electricity',
  'Interior and clothing',
];

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  //  top Header
  readonly topMenuList: string[] = ['Home', 'About', 'Catalog'];
  readonly AboutTheCompany: string = 'About the company';
  companyShow: boolean = true;
  //  bottom Header
  menuListChanged: string[] = bottomMenuList;
  isUpperCase: boolean = true;
  changeButtonText = 'To Upper';
  buttonText: string = 'Hide';

  companyShowFunc = (name: string) => {
    this.companyShow = !this.companyShow;
    if (!this.companyShow) {
      this.buttonText = 'Show';
    } else {
      this.buttonText = 'Hide';
    }
    return name;
  };

  changeText = () => {
    this.menuListChanged = bottomMenuList.map((item) =>
      this.isUpperCase ? item.toLocaleUpperCase() : item.toLocaleLowerCase()
    );
    this.isUpperCase = !this.isUpperCase;
    this.changeButtonText = this.isUpperCase ? 'To Upper' : 'To Lower';
  };
}
