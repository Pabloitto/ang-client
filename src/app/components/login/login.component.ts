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
  logoPath: string
  constructor(private _loginService: LoginService) {
    this.user = new UserModel()
    this.logoPath = 'assets/logo.png'
  }
  onLogin (response) {
    const success = response.success
    if (success) {
      this.user.clear()
    } else {
      this.user.errorMessage = response.message
    }
  }
  async handleSumbit(event) {
    const valid = this.user.isValid()
    if (valid) {
      const response = await this._loginService.login(this.user)
      this.onLogin(response)
    } else {
      this.user.errorMessage = 'Form is not valid'
    }
  }
}
