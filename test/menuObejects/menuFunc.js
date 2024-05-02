import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import MenuAlert from './menuFlash.js'
import Https from '../mainUrl.js';


class Menu extends Https {

    get deals () {
        return $('//*[@id="headerPrimary"]/div[3]/a')
    }

    get topDeals () {
        return $('//div[@role="dialog"]/ul/li/a[@data-test="deals-topDeals"]')
    }
    
    get TCDeals () {
        return $('/html/body/div[6]/div/div/ul/div[2]/li/a')
    }

    get clearance () {
        return $('/html/body/div[6]/div/div/ul/li[3]/a')
    }

    async menuDrop (itemVer) {
        await browser.setWindowSize(1500, 5000);
        await this.deals.click();
        await this.topDeals.click();
        await this.deals.click();
        await this.TCDeals.click();
        await this.deals.click();
        await this.clearance.click();
        await expect(MenuAlert.finalFlash).toBeExisting()
        await expect(MenuAlert.finalFlash).toHaveTextContaining(itemVer)
    }

    
    baseUrl () {
       return super.baseUrl();
    }
}

export default new Menu();