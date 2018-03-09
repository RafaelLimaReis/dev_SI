import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent implements OnInit {

  @Input() name: String;

  constructor() { }

  ngOnInit() {
  }

}
