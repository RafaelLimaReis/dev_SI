import { Team } from './../models/team';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.less']
})
export class TeamsComponent implements OnInit {

  teams : Team[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.teams().subscribe(teams => this.teams = teams);
  }
}
