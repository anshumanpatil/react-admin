class Auth {
    constructor() {
        if (!!Auth.instance) {
            return Auth.instance;
        }

        Auth.instance = this;
        
        this.loggedin = false;

        return this;
    }
}
export default new Auth();
