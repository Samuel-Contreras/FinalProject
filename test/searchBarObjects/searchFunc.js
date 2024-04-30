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

    async searchingProdPos (item) {
        await this.searchInput.clearValue();
        await this.searchInput.setValue(item);
        await this.searchBtn.click();
        await expect(FlashSearch.searchBarFlash).toBeExisting()
        await expect(FlashSearch.searchBarFlash).toHaveTextContaining('for “razer mouse”')
    }

    async searchingProdNeg (item) {
        await this.searchInput.clearValue();
        await this.searchInput.setValue(item);
        await this.searchBtn.click();
        await expect(FlashSearch.misspelled).toBeExisting()
        await expect(FlashSearch.misspelled).toHaveTextContaining('for “mens demin”')
    }

    async searchingProdFake (item) {
        await this.searchInput.clearValue();
        await this.searchInput.setValue(item);
        await this.searchBtn.click();
        await expect(FlashSearch.negBarFlash).toBeExisting()
        await expect(FlashSearch.negBarFlash).toHaveTextContaining("We couldn’t find a match for your search.")
    }
    
    async searchingProdLimit (item) {
        await this.searchInput.clearValue();
        await this.searchInput.setValue(item);
        await this.searchBtn.click();
        await expect(FlashSearch.negBarFlash).toBeExisting()
        await expect(FlashSearch.negBarFlash).toHaveTextContaining("We couldn’t find a match for your search.")
    }

    
    searchUrl () {
       return super.searchUrl();
    }
}

export default new SearchField();
