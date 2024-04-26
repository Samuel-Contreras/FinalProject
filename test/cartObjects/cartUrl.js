import { browser } from '@wdio/globals'


export default class CartHttps {
    
    cartUrl (path) {
        return browser.url(`https://www.target.com/`)
    }

}
