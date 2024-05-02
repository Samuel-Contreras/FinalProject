import { $ } from '@wdio/globals'
import Https from '../mainUrl.js';

class CartFlash extends Https {

    get emptyCartFlash () {
        return $('/html/body/div[1]/div[2]/div[4]/div[1]/div/div/div[2]/h1')
    }

}

export default new CartFlash();