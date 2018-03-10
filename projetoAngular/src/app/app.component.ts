import { Produto } from './produto';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    chuteira = {name:'Chuteira', description:'Chuteira nike', swap:true};
    geladeira = {name:'Geladeira', description:'Geladeira semi-nova', swap:true};

    products: Produto[] = [
      {name:'Chuteira', description:'Chuteira nike', distance:6, swap:true},
      {name:'Geladeira', description:'Geladeira semi-nova', distance:24, swap:true},
      {name:'Microondas', description:'Microondas consul', distance:10, swap:true}
    ]
}
