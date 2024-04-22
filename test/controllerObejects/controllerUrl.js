import { browser } from '@wdio/globals'


export default class CHttps {
    
    controllerUrl (path) {
        return browser.url(`https://www.target.com/`)
    }
}
