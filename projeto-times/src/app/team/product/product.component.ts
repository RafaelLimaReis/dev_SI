import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {


  @Output() add = new EventEmitter();
  @Input() itemShop;

  constructor() {
    console.log(this.itemShop)
  }

  ngOnInit() {
    console.log(this.itemShop);
  }

  sendEvent(){
    this.add.emit(this.itemShop);
  }
}
