import { browser } from '@wdio/globals'


export default class Https {
    
    searchUrl (path) {
        return browser.url(`https://www.target.com/`)
    }
}
