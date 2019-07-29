class Auth {
    constructor() {
        if (!!Auth.instance) {
            return Auth.instance;
        }

        Auth.instance = this;
        
        this.loggedin = false;

        this.setToken = (token) => {
            localStorage.setItem('token', token);
            this.loggedin = true;
        }
    
        this.getToken = () => {
            return localStorage.getItem('token');
        }

        return this;
    }
}
export default new Auth();
