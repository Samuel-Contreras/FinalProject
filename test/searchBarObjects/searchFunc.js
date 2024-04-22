import { $ } from '@wdio/globals'
import Https from './searchBarUrl.js';



class SearchField extends Https {

    get searchInput () {
        return $('#search')
    }

    get searchBtn () {
        return $('.styles__SearchButton-sc-wnzihy-3')
    }

    async searchingProd (item) {
        await this.searchInput.clearValue();
        await this.searchInput.setValue(item);
        await this.searchBtn.click();
    }

    
    searchUrl () {
       return super.searchUrl();
    }
}

export default new SearchField();
