import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { InfoComponent } from './components/info/info.component';
import { ProductsComponent } from './components/products/products.component';
import { PopularComponent } from './components/popular/popular.component';
import { NamesComponent } from './components/names/names.component';
import { NewPopularComponent } from './components/new-popular/new-popular.component';
import { FooterComponent } from './components/footer/footer.component';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mentoring-first-project';
}
