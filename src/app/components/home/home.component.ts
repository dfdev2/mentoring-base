import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InfoComponent } from '../info/info.component';
import { ProductsComponent } from '../products/products.component';
import { PopularComponent } from '../popular/popular.component';
import { NamesComponent } from '../names/names.component';
import { NewPopularComponent } from '../new-popular/new-popular.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgIf,
    InfoComponent,
    ProductsComponent,
    PopularComponent,
    NamesComponent,
    NewPopularComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
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
