import { ShoppingCartService } from './shop.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.less']
})
export class ShopCartComponent implements OnInit {


  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): any[] {
    console.log(this.shoppingCartService.items)
    return this.shoppingCartService.items
  }
  total(): number {
    return this.shoppingCartService.total()
  }

  clear() {
    this.shoppingCartService.clear()
  }

  removeItem(item: any) {
    this.shoppingCartService.removeItem(item)
  }

  addItem(item: any) {
    console.log(item);
    this.shoppingCartService.addItem(item)
  }
}
