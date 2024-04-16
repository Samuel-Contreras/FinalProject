import { $ } from '@wdio/globals'
import Page from './page.js';


class LoginPage extends Page {
    
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }

    get faildUsernameAlert () {
        return $('.error-button')
    } 

    
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    6
    open () {
       return super.open();
    }
}

export default new LoginPage();
