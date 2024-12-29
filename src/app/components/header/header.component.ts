import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopMenuList } from '../../interfaces/topMenuList.interface';
import { TodayDatePipe } from '../pipes/todayDate.pipe';
import { YellowHover } from '../../directives/yellow-hover.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, RouterLink, TodayDatePipe, YellowHover],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  topMenuList: TopMenuList[] = [
    { name: 'Home', link: '' },
    { name: 'Users', link: 'users' },
    { name: 'Todos', link: 'todos' },
    { name: 'Posts', link: 'posts' },
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
