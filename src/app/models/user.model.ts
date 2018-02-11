export class UserModel {
    public errorMessage: string=''
    constructor(
        public email:string='',
        public password:string=''
    ) {}
    isValid () {
        return this.email && this.password
    }
    clear() {
        this.email = ''
        this.password = ''
        this.errorMessage = ''
    }
}