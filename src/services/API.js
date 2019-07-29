import axios from "axios";
class API {
    constructor() {
        if (!!API.instance) {
            return API.instance;
        }

        API.instance = this;
        this.API_URL = process.env.REACT_APP_API_URL
        this.LOGIN_URL = process.env.REACT_APP_LOGIN_URL
        return this;
    }

    loginCall(credentials){
        return axios({
            method: "post",
            url: this.API_URL + this.LOGIN_URL,
            data: credentials
          });
    }


}
export default new API();