import { $ } from '@wdio/globals'
import CartHttps from './cartUrl.js'

class CartFlash extends CartHttps {

    get emptyCartFlash () {
        return $('/html/body/div[1]/div[2]/div[4]/div[1]/div/div/div[2]/h1')
    }

}

export default new CartFlash();