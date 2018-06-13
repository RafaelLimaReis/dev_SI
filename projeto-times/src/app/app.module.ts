import { ShoppingCartService } from './team/shop-cart/shop.service';
import { ApiService } from './api/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ROUTES } from './routes';

import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { HttpModule } from '@angular/http';
import { TeamComponent } from './team/team.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './team/product/product.component';
import { TrophiesComponent } from './team/trophies/trophies.component';
import { ShopCartComponent } from './team/shop-cart/shop-cart.component';
import { MenuComponent } from './team/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TeamComponent,
    ProductComponent,
    TrophiesComponent,
    ShopCartComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ApiService, ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
