import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { BaseService } from './base.service';

@Injectable()
export class LoginService extends BaseService{
  login(user: UserModel) {
    const path = 'api/session/login'
    return this.doPost(path, user)
  }
}
