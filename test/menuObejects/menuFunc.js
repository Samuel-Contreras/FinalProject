import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import MenuAlert from './menuFlash.js'
import MHttps from './menuUrl.js';


class Menu extends MHttps {

    get deals () {
        return $('//*[@id="headerPrimary"]/div[3]/a')
    }

    get topDeals () {
        return $('/html/body/div[6]/div/div/ul/li[1]/a')
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

    
    menuUrl () {
       return super.menuUrl();
    }
}

export default new Menu();