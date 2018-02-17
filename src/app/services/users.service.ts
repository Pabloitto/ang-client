import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { UserModel } from '../models/user.model';

@Injectable()
export class UsersService extends BaseService {
  saveUser(user:UserModel) {
    return this.doPost('api/users', user)
  }
  fetchUsers() {
    return this.doGet('api/users')
  }
}
