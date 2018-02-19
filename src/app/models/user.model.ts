export class UserModel {
    public errorMessage: string=''
    constructor(
        public email:string='',
        public password:string='',
        public name:string='',
        public confirmPassword:string=''
    ) {}
    isValid () {
        return this.email && this.password
    }
    clear() {
        this.email = ''
        this.password = ''
        this.confirmPassword = ''
        this.name = ''
        this.errorMessage = ''
    }
}