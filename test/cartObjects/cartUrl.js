import { browser } from '@wdio/globals'


export default class CartHttps {
    
    cartUrl () {
        return browser.url(`https://www.target.com/`)
    }

}
