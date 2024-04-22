import { browser } from '@wdio/globals'


export default class Https {
    
    baseUrl (path) {
        return browser.url(`https://www.target.com/`)
    }
}
