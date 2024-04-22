import { $ } from '@wdio/globals'
import Https from './homeUrl.js';


class FlashZip extends Https {
    
    get homeFlash () {
        return $('.h-sr-only')
    }
}

export default new FlashZip();
