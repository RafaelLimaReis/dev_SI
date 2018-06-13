import { element } from 'protractor';
import { Achievements } from './../models/achievements';
import { Trophie } from './../models/trophie';
import { ApiService } from './../api/api.service';
import { Team } from './../models/team';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.less']
})
export class TeamComponent implements OnInit {

  teamDetail: Team;

  constructor(private apiService:ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    let _id: number;

    this.route.params.subscribe(params => _id = params['id']);

    this.apiService.team(_id).subscribe(teams => {
      this.teamDetail = teams;
    });
  }
}
