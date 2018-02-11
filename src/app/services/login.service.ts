import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable()
export class LoginService {

  constructor() { }
  login(user: UserModel) {
    return true
  }
}
