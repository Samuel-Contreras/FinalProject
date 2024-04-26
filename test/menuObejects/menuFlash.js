import { $ } from '@wdio/globals'
import MHttps from './menuUrl.js';


class MenuAlert extends MHttps {

    get finalFlash () {
        return $('/html/body/div[1]/div[2]/main/div/div/div/div[1]/div/div[1]/h1')
    }
}

export default new MenuAlert();