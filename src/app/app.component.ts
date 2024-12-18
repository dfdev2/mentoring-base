import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { InfoComponent } from './components/info/info.component';
import { ProductsComponent } from './components/products/products.component';
import { PopularComponent } from './components/popular/popular.component';
import { NamesComponent } from './components/names/names.component';
import { NewPopularComponent } from './components/new-popular/new-popular.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgIf } from '@angular/common';

const newPages: number[] = [5, 4, 3, 2, 1];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    InfoComponent,
    ProductsComponent,
    PopularComponent,
    NamesComponent,
    NewPopularComponent,
    FooterComponent,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  showImg: boolean = true;
  showMain: boolean = true;
  imgBtn: string = 'Hide';
  mainBtn: string = 'Hide';

  showImgFunc = () => {
    this.showImg = !this.showImg;
    if (!this.showImg) {
      this.imgBtn = 'Show';
    } else {
      this.imgBtn = 'Hide';
    }
  };

  showMainFunc = () => {
    this.showMain = !this.showMain;
    if (!this.showMain) {
      this.mainBtn = 'Show';
      this.showImg = true;
      this.imgBtn = 'Hide';
    } else {
      this.mainBtn = 'Hide';
    }
  };
}
