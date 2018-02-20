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
  loading:boolean = false
  user: UserModel
  users = []
  actions = [
    {
      text: 'Guardar',
      btnClass: 'btn-success',
      icon:'pencil',
      onClick: this.saveUser.bind(this)
    },
    {
      text: 'Cancelar',
      icon: 'trash',
      btnClass: 'btn-danger',
      onClick: this.cancel.bind(this)
    }
  ]
  constructor(private _userService: UsersService) {
    this.user = new UserModel()
  }
  ngOnInit() {
    this.fetchUsers()
  }
  async fetchUsers() {
    this.loading = true
    setTimeout(async function() {
      this.users = await this._userService.fetchUsers()
      this.loading = false
    }.bind(this), 3000)
  }
  async saveUser (modal) {
    try {
      let response = null
      if (this.user._id) {
        response = await this._userService.editUser(this.user)
      } else {
        response = await this._userService.saveUser(this.user)
      }
      if (response && response.error) {
        alert(response.error)
      } else { 
        await this.fetchUsers()
        this.user.clear()
        modal.hide()
      }
    } catch(err) {
      console.log(err)
    }
  }
  cancel (modal) {
    this.user.clear()
    modal.hide()
  }
  async editarUsuario(user, modal) {
    console.log('Editando', user)
    const data = await this._userService.fetchById(user._id)
    this.user = new UserModel(data.email, '', data.name, '')
    this.user._id = data._id
    modal.show()
  }
  async borrarUsuario(user) {
    console.log('Borrando', user)
    await this._userService.deleteUser(user._id)
    this.fetchUsers()
  }
}
