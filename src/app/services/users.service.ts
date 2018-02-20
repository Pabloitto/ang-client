import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { UserModel } from '../models/user.model';

@Injectable()
export class UsersService extends BaseService {
  saveUser(user:UserModel) {
    return this.doPost('api/users', user)
  }
  fetchById(id) {
    return this.doGet(`api/users/${id}`)
  }
  fetchUsers() {
    return this.doGet('api/users')
  }
  editUser(user:UserModel) {
    return this.doPatch('api/users', user)
  }
  deleteUser(id) {
    return this.doDelete(`api/users/${id}`)
  }
}
