import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: '[products]',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() product:Produto;

  constructor() { }

  ngOnInit() {
  }

}
