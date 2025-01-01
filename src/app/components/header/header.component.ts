import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { TodayDatePipe } from '../../pipes/todayDate.pipe';
import { YellowHover } from '../../directives/yellow-hover.directive';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AskDialogComponent } from '../admin/ask-dialog/ask-dialog.component';
import { UserServices } from '../../services/user.services';
import { topMenuList, bottomMenuList } from '../../data/headerLinks';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgFor,
    RouterLink,
    TodayDatePipe,
    YellowHover,
    MatDialogModule,
    NgIf,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly userServices = inject(UserServices);
  readonly logInDialog = inject(MatDialog);
  readonly router = inject(Router);

  readonly topHeaderLinks = topMenuList;
  bottomHeaderLinks = bottomMenuList;

  readonly AboutTheCompany: string = 'About the company';
  readonly companyShow: boolean = true;

  menuListChanged: string[] = this.bottomHeaderLinks;
  isUpperCase: boolean = true;
  changeButtonText: string = 'To Upper';
  readonly buttonText: string = 'Hide';

  hasAdmin = this.userServices.user$.pipe(map((item) => item?.isAdmin));

  public changeText = () => {
    this.menuListChanged = this.bottomHeaderLinks.map((item) =>
      this.isUpperCase ? item.toLocaleUpperCase() : item.toLocaleLowerCase()
    );
    this.isUpperCase = !this.isUpperCase;
    this.changeButtonText = this.isUpperCase ? 'To Upper' : 'To Lower';
  };

  logIn() {
    const dialog = this.logInDialog.open(AskDialogComponent, {});

    dialog.afterClosed().subscribe((result: any) => {
      if (result === 'user') {
        this.userServices.loginAsUser();
        this.router.navigate(['']);
      } else if (result === 'admin') {
        this.userServices.loginAsAdmin();
      } else {
        this.logout();
      }
    });
  }

  logout() {
    this.userServices.logout();
    this.router.navigate(['']);
  }
}
