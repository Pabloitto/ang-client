import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ct-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu: any
  constructor() {
    this.menu = [
      {
        text: 'USERS',
        cssIcon: 'fa-user-circle',
        path: '#/dashboard/users'
      }
    ]
  }

  ngOnInit() {
  }

}
