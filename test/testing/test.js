import { expect } from '@wdio/globals'
import FlashZip from '../zipObjects/zipFlash.js'
import ChangingZip from '../zipObjects/zipFunc.js'
import SearchField from '../searchBarObjects/searchFunc.js'
import FlashSearch from '../searchBarObjects/searchFlash.js'
//import Searching from '../controllerObejects/searchFunc.js'
//import ControllerAlert from '../controllerObejects/controllerFlash.js'




describe('changing zipcode', () => {
    it('zipcode should be changed to local location', async () => {
        await ChangingZip.baseUrl()
        
        await ChangingZip.zip("84097")
        await expect(FlashZip.homeFlash).toBeExisting()
        await expect(FlashZip.homeFlash).toHaveTextContaining
        ('skip to main content')
        
       await ChangingZip.zip("23-0-")
       await expect(FlashZip.fakeZipFLash).toBeExisting()
       await expect(FlashZip.fakeZipFLash).toHaveTextContaining
       ('ZIP code must be five or nine digits.')

    })

})

 describe('adding a tv to cart', () => {
    it('navigating through nav bars to find a tv', async () => {
        await SearchField.searchUrl()
        
        
        await SearchField.searchingProd('razer mouse')
        await expect(FlashSearch.searchBarFlash).toBeExisting()
        await expect(FlashSearch.searchBarFlash).toHaveTextContaining('for “razer mouse”')

        await SearchField.searchingProd('asdfjklasasdjfkljadlkfjjdflk')
        await expect(FlashSearch.negBarFlash).toBeExisting()
        await expect(FlashSearch.negBarFlash).toHaveTextContaining('We couldn’t find a match for your search.')

    })

}) 

/*describe('adding a xbox controller to cart', () => {
    it('using search bar to buy a controller', async () => {
        await Searching.controllerUrl()
        
        
        await Searching.wiredX('wired xbox controller')

        //await expect(ControllerAlert.homeFlash).toBeExisting()
        //await expect(ControllerAlert.homeFlash).toHaveTextContaining('skip to main content')

        await expect(ControllerAlert.cartCFlash).toBeExisting()
        await expect(ControllerAlert.cartCFlash).toHaveTextContaining('Added to cart')
    })

}) */