import { browser } from '@wdio/globals'


export default class MHttps {
    
    menuUrl () {
        return browser.url(`https://www.target.com/`)
    }
}
