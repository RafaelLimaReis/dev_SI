import { ProductComponent } from './team/product/product.component';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { TeamsComponent } from './teams/teams.component';
import { Routes } from '@angular/router'
import { TrophiesComponent } from './team/trophies/trophies.component';

export const ROUTES: Routes = [

  { path: '', component: TeamsComponent },
  { path: 'team/:id', component: TeamComponent,
  children: [
    { path: '', redirectTo: 'trophies', pathMatch: 'full' },
    { path: 'products', component: ProductComponent },
    { path: 'trophies', component: TrophiesComponent }
  ]},
]
