import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { BaseService } from './base.service';

@Injectable()
export class LoginService extends BaseService {
  login(user: UserModel) {
    return this.doPost('api/session/login', user)
  }
}
