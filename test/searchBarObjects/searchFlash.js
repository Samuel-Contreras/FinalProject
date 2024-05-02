import { $ } from '@wdio/globals'
import Https from '../mainUrl.js';


class FlashSearch extends Https {

    get searchBarFlash () {
        return $('//*[@id="pageBodyContainer"]/div/div[1]/div/div[4]/div/div[1]/div[1]/div[2]') 
    }

    get misspelled () {
        return $('/html/body/div[1]/div[2]/main/div/div[1]/div/div[4]/div/div[1]/div[1]/div[2]/div[1]/div/span')
    }

    get negBarFlash () {
        return $('//*[@id="pageBodyContainer"]/div/div[1]/div/div[1]/div/div[1]/div[2]')
    }
}


export default new FlashSearch();