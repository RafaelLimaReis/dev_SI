import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  items: any;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    let _id: number;

    this.route.parent.params.subscribe(params => _id = params['id']);

    this.apiService.items(_id).subscribe(data => { this.items = data; console.log(this.items);});
  }

  ngOnInit() {
    console.log(this.items);
  }

}
