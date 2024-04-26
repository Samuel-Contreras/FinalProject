import { expect } from '@wdio/globals'
import FlashZip from '../zipObjects/zipFlash.js'
import ChangingZip from '../zipObjects/zipFunc.js'
import SearchField from '../searchBarObjects/searchFunc.js'
import FlashSearch from '../searchBarObjects/searchFlash.js'
import Menu from '../menuObejects/menuFunc.js'
import MenuAlert from '../menuObejects/menuFlash.js'
import ShopCart from '../cartObjects/cartFunc.js'
import CartFlash from '../cartObjects/cartFlash.js'




describe('changing zipcode', () => {
    it('zipcode should be changed to local location', async () => {
        await ChangingZip.baseUrl()

        await ChangingZip.zip("43085")
        await expect(FlashZip.homeFlash).toBeExisting()
        await expect(FlashZip.homeFlash).toHaveTextContaining
        ('skip to main content')
        
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

 describe('searching a mouse, mispelled item and fake product', () => {
    it('using search bar for positive/negative test', async () => {
        await SearchField.searchUrl()
        
        
        await SearchField.searchingProd('razer mouse')
        await expect(FlashSearch.searchBarFlash).toBeExisting()
        await expect(FlashSearch.searchBarFlash).toHaveTextContaining('for “razer mouse”')

        await SearchField.searchingProd('mens demin')
        await expect(FlashSearch.misspelled).toBeExisting()
        await expect(FlashSearch.misspelled).toHaveTextContaining('for “mens demin”')

        await SearchField.searchingProd('asdfjklasasdjfkljadlkfjjdflk')
        await expect(FlashSearch.negBarFlash).toBeExisting()
        await expect(FlashSearch.negBarFlash).toHaveTextContaining("We couldn’t find a match for your search.")

        await SearchField.searchingProd('ababababababababababababababababbaababababababababababababbababababbabababababababababbabababbababababababbababababababababababbababababbababababbababababbabababababababbaba')
        await expect(FlashSearch.negBarFlash).toBeExisting()
        await expect(FlashSearch.negBarFlash).toHaveTextContaining("We couldn’t find a match for your search.")

    })

}) 

describe('clicking every dropdown in the New & Featured menu', () => {
    it('using nav bar to enter every link', async () => {
        await Menu.menuUrl()
        
        
        await Menu.menuDrop()
        await expect(MenuAlert.finalFlash).toBeExisting()
        await expect(MenuAlert.finalFlash).toHaveTextContaining('Clearance')

        
    })

}) 


describe('checking cart to add instock, out of stock and cart limits ', () => {
    it('adds item, enters cart then deletes item', async () => {
        await ShopCart.cartUrl()
        
        
        await ShopCart.cartSearch('toilet paper')
        await expect(CartFlash.emptyCartFlash).toBeExisting()
        await expect(CartFlash.emptyCartFlash).toHaveTextContaining('Your cart is empty')


    })

}) 