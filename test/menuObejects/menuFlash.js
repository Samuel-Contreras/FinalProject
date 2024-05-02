import { $ } from '@wdio/globals'
import Https from '../mainUrl.js';


class MenuAlert extends Https {

    get finalFlash () {
        return $('/html/body/div[1]/div[2]/main/div/div/div/div[1]/div/div[1]/h1')
    }
}

export default new MenuAlert();