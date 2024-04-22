import { $ } from '@wdio/globals'
import CHttps from './controllerUrl.js';


class ControllerAlert extends CHttps {

    get cartCFlash () {
        return $('.h-text-lg') 
    }
}

export default new ControllerAlert();