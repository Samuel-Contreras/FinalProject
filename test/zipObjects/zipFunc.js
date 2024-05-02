import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import Https from '../mainUrl.js';
import FlashZip from './zipFlash.js'
import { Key } from 'webdriverio';


class ChangingZip extends Https {

    get changeZip () {
        return $('#zip-code-id-btn')
    }

    get zipInput () {
        return $('#zip-code')
    }
    
    get saveZipBtn () {
        return $('//div[@class="h-border-t h-padding-a-default"]/button')
    }


    async posiZip (zipCode, textVer) {
        await this.changeZip.click();
        await this.zipInput.click();
        await browser.keys([Key.Backspace] + [Key.Backspace] + [Key.Backspace] + [Key.Backspace] + [Key.Backspace])
        await this.zipInput.setValue(zipCode);
        await this.saveZipBtn.click();
        await expect(FlashZip.homeFlash).toBeExisting()
        await expect(FlashZip.homeFlash).toHaveTextContaining(textVer)
        
    }

    async negZip (zipCode,textVer) {
        await this.changeZip.click();
        await this.zipInput.click();
        await browser.keys([Key.Backspace] + [Key.Backspace] + [Key.Backspace] + [Key.Backspace] + [Key.Backspace])
        await this.zipInput.setValue(zipCode);
        await this.saveZipBtn.click();
        await expect(FlashZip.fakeZipFLash).toBeExisting()
       await expect(FlashZip.fakeZipFLash).toHaveTextContaining(textVer)
    }

    
    baseUrl () {
       return super.baseUrl();
    }
}

export default new ChangingZip();
