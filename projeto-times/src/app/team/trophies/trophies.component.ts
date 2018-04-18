import { Component, OnInit, Input } from '@angular/core';
import { Trophie } from '../../models/trophie';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-trophies',
  templateUrl: './trophies.component.html',
  styleUrls: ['./trophies.component.less']
})
export class TrophiesComponent implements OnInit {

  trophies: Trophie[] = [];

  constructor(private apiService:ApiService, private route: ActivatedRoute) {
    let _id:number;

    this.route.parent.params.subscribe(params => { _id = params['id']});

    this.apiService.team(_id).subscribe(teams => {
      this.findTrophies(teams.achievements);
    });
  }

  private findTrophies(_array: any) {
    _array.forEach(element => {
      this.apiService.trophie(element.trophieId).subscribe(trophie => {
        trophie['quantity'] = element.quantity;
        this.trophies.push(trophie);
      })
    });
  }

  ngOnInit() {
  }

}
