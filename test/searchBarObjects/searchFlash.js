import { $ } from '@wdio/globals'
import Https from './searchBarUrl.js';


class FlashSearch extends Https {
    
    get homeFlash () {
        return $('//*[@id="pageBodyContainer"]/div/div[1]/div/div[1]/div/div[1]/h1')
    }

    get searchBarFlash () {
        return $('//*[@id="pageBodyContainer"]/div/div[1]/div/div[4]/div/div[1]/div[1]/div[2]') 
    }

    get negBarFlash () {
        return $('//*[@id="pageBodyContainer"]/div/div[1]/div/div[1]/div/div[1]/div[2]')
    }
}


export default new FlashSearch();