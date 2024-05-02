import { $ } from '@wdio/globals'
import Https from '../mainUrl.js';


class FlashZip extends Https {
    
    get homeFlash () {
        return $('.h-sr-only')
    }

    get fakeZipFLash () {
        return $('#zip-code--ErrorMessage')
    }
}

export default new FlashZip();
