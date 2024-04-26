import { browser } from '@wdio/globals'


export default class MHttps {
    
    menuUrl (path) {
        return browser.url(`https://www.target.com/`)
    }
}
