import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ct-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  menuItems: any
  constructor() {
    this.menuItems = [
      { text: 'Usuarios', path: '/#/dashboard/usuarios', active: true },
      { text: 'Articulos', path: '/#/articulos', active: false },
      { text: 'Configuracion', path: '/#/configuracion', active: false }
    ]
  }
  selectItem (menuItem) {
    this.menuItems.forEach(function(item) {
      item.active = false
    })
    menuItem.active = true
  }

  ngOnInit() {
  }

}
