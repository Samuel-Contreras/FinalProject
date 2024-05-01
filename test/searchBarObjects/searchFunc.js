import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import FlashSearch from './searchFlash.js'
import Https from './searchBarUrl.js';



class SearchField extends Https {

    get searchInput () {
        return $('#search')
    }

    get searchBtn () {
        return $('.styles__SearchButton-sc-wnzihy-3')
    }

    async searchingProdPos (item, textVer) {
        await this.searchInput.clearValue();
        await this.searchInput.setValue(item);
        await this.searchBtn.click();
        await expect(FlashSearch.searchBarFlash).toBeExisting()
        await expect(FlashSearch.searchBarFlash).toHaveTextContaining(textVer)
    }

    async searchingProdNeg (item, textVer) {
        await this.searchInput.clearValue();
        await this.searchInput.setValue(item);
        await this.searchBtn.click();
        await expect(FlashSearch.misspelled).toBeExisting()
        await expect(FlashSearch.misspelled).toHaveTextContaining(textVer)
    }

    async searchingProdFake (item, textVer) {
        await this.searchInput.clearValue();
        await this.searchInput.setValue(item);
        await this.searchBtn.click();
        await expect(FlashSearch.negBarFlash).toBeExisting()
        await expect(FlashSearch.negBarFlash).toHaveTextContaining(textVer)
    }
    
    async searchingProdLimit (item, textVer) {
        await this.searchInput.clearValue();
        await this.searchInput.setValue(item);
        await this.searchBtn.click();
        await expect(FlashSearch.negBarFlash).toBeExisting()
        await expect(FlashSearch.negBarFlash).toHaveTextContaining(textVer)
    }

    
    searchUrl () {
       return super.searchUrl();
    }
}

export default new SearchField();
