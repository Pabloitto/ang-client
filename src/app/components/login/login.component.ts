import { Component } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'ct-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent{
  user: UserModel
  constructor(private _loginService: LoginService) {
    this.user = new UserModel()
  }
  handleSumbit(event) {
    const valid = this.user.isValid()
    if (valid) {
      const sucess = this._loginService.login(this.user)
      if (sucess) {
        //TODO: move to dashboard
        this.user.clear()
      } else {
        this.user.errorMessage = 'Bad credentials'
      }
    } else {
      this.user.errorMessage = 'Form is not valid'
    }
  }
}
