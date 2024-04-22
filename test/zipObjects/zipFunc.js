import { $ } from '@wdio/globals'
import Https from './homeUrl.js';
import { Key } from 'webdriverio';


class ChangingZip extends Https {

    get changeZip () {
        return $('#zip-code-id-btn')
    }

    get zipInput () {
        return $('#zip-code')
    }
    
    get saveZipBtn () {
        return $('/html/body/div[4]/div/div/div[2]/div/div[2]/button')
    }

    
    async zip (zipCode) {
        await this.changeZip.click();
        await this.zipInput.click();
        await browser.keys([Key.Backspace] + [Key.Backspace] + [Key.Backspace] + [Key.Backspace] + [Key.Backspace])
        await this.zipInput.setValue(zipCode);
        await this.saveZipBtn.click();
    }

    6
    baseUrl () {
       return super.baseUrl();
    }
}

export default new ChangingZip();
