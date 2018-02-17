import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../models/user.model';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'ct-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {
  user: UserModel
  users = []
  actions = [
    {
      text: 'Guardar',
      btnClass: 'btn-success',
      onClick: this.saveUser.bind(this)
    },
    {
      text: 'Cancelar',
      btnClass: 'btn-danger',
      onClick: this.cancel.bind(this)
    }
  ]
  constructor(private _userService: UsersService) {
    this.user = new UserModel()
  }
  async ngOnInit() {
    this.users = await this._userService.fetchUsers()
  }
  async saveUser (modal) {
    console.log('Guardando')
    const response = await this._userService.saveUser(this.user)
    if (response && response.error) {
      alert(response.error)
    } else { 
      this.user.clear()
      modal.hide()
    }
  }
  cancel () {
    console.log('Cancelando')
    this.user.clear()
  }
}
