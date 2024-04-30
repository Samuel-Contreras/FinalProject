import { browser } from '@wdio/globals'


export default class Https {
    
    searchUrl () {
        return browser.url(`https://www.target.com/`)
    }
}
