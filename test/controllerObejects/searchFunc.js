import { $ } from '@wdio/globals'
import CHttps from './controllerUrl.js';


class Searching extends CHttps {

    get searchBarInput () {
        return $('//*[@id="search"]')
    }

    get searchBtn () {
        return $('//*[@id="headerPrimary"]/div[6]/form/button')
    }
    
    get controllDiv () {
        return $('//*[@id="pageBodyContainer"]/div/div[1]/div/div[4]/div/div[1]/section/div/div[3]/div/div/div[1]/div[1]/h3/div/div/a')
    }
    
    get addCartBtn () {
        return $('#addToCartButtonOrTextIdFor89616376')
    }

    async wiredX (item) {
        await this.searchBarInput.setValue(item);
        await this.searchBtn.click();
        await this.controllDiv.click();
        await this.addCartBtn.click();
    }

    
    controllerUrl () {
       return super.controllerUrl();
    }
}

export default new Searching();