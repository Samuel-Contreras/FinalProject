import ChangingZip from '../zipObjects/zipFunc.js'
import SearchField from '../searchBarObjects/searchFunc.js'
import Menu from '../menuObejects/menuFunc.js'
import ShopCart from '../cartObjects/cartFunc.js'




describe('changing zipcode', () => {
    it('zipcode should be changed to local location', async () => {
        await ChangingZip.baseUrl()

        await ChangingZip.posiZip("29717")
        await ChangingZip.posiZip("84097")
        await ChangingZip.negZip("23$-0")
        
    })

})

 describe('searching a mouse, mispelled item and fake product', () => {
    it('using search bar for positive/negative test', async () => {
        await SearchField.searchUrl()
        
        await SearchField.searchingProdPos('razer mouse')
        await SearchField.searchingProdNeg('mens demin')
        await SearchField.searchingProdFake('asdfjklasasdjfkljadlkfjjdflk')
        await SearchField.searchingProdLimit('ababababababababababababababababbaababababababababababababbababababbabababababababababbabababbababababababbababababababababababbababababbababababbababababbabababababababbaba')

    })

}) 

describe('clicking every dropdown in the New & Featured menu', () => {
    it('using nav bar to enter every link', async () => {
        await Menu.menuUrl()
        
        await Menu.menuDrop()
        
    })

}) 


describe('checking cart to add instock, out of stock and cart limits ', () => {
    it('adds item at max quantity, enters cart, changes shipping options then deletes item', async () => {
        await ShopCart.cartUrl()
        
        await ShopCart.cartSearch('toilet paper')

    })

}) 