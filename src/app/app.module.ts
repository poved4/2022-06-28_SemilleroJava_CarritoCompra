import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

//Services
import { LoadScriptsService } from "./load-scripts.service";

//components
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CoverComponent } from './cover/cover.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes= [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent
  },
  {
    path: 'contact-form',
    component: ContactFormComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    FooterComponent,
    ShoppingCartComponent,
    ProductsComponent,
    CoverComponent,
    BannerComponent,
    MainComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    LoadScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
