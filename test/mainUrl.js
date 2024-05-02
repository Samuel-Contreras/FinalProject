import { browser } from '@wdio/globals'


export default class Https {
    
    baseUrl () {
        return browser.url(`https://www.target.com/`)
    }
}

