import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { TeamsComponent } from './teams/teams.component';
import { Routes } from '@angular/router'

export const ROUTES: Routes = [

  { path: '', component: TeamsComponent },
  { path: 'team/:id', component: TeamComponent }
]
