import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MyFriendsComponent } from './my-friends/my-friends.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    MyProductsComponent,
    MyFriendsComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
