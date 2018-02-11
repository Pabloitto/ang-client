import { Component } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ct-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent{
  user: UserModel
  constructor(
    private _router: Router,
    private _loginService: LoginService
  ) {
    this.user = new UserModel()
  }
  async handleSumbit(event) {
    const valid = this.user.isValid()
    if (valid) {
      const data = await this._loginService.login(this.user)
      console.log(data)
      const { success } = data
      if (success) {
        this.user.clear()
        this._router.navigate(['dashboard'])
      } else {
        this.user.errorMessage = data.message
      }
    } else {
      this.user.errorMessage = 'Form is not valid'
    }
  }
}
