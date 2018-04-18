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

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TeamComponent,
    ProductComponent,
    TrophiesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
