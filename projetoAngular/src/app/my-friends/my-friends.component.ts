import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-friends',
  templateUrl: './my-friends.component.html',
  styleUrls: ['./my-friends.component.css']
})
export class MyFriendsComponent implements OnInit {

  @Input() name: String;

  constructor() { }

  ngOnInit() {
  }

}
