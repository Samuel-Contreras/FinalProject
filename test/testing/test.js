import ChangingZip from '../zipObjects/zipFunc.js'
import SearchField from '../searchBarObjects/searchFunc.js'
import Menu from '../menuObejects/menuFunc.js'
import ShopCart from '../cartObjects/cartFunc.js'





describe('changing zipcode', () => {
    it('zipcode should be changed to local location', async () => {
        await ChangingZip.baseUrl()

        await ChangingZip.posiZip("29717", 'skip to main content')
        await ChangingZip.posiZip("84097", 'skip to main content')
        await ChangingZip.negZip("23$-0", 'ZIP code must be five or nine digits.')
        
    })

})

 describe('searching a mouse, mispelled item and fake product', () => {
    it('using search bar for positive/negative test', async () => {
        await SearchField.baseUrl()
        
        await SearchField.searchingProdPos('razer mouse', 'for “razer mouse”')
        await SearchField.searchingProdNeg('mens demin', 'for “mens demin”')
        await SearchField.searchingProdFake('asdfjklasasdjfkljadlkfjjdflk', "We couldn’t find a match for your search.")
        await SearchField.searchingProdLimit
        ('ababababababababababababababababbaababababababababababababbababababbabababababababababbabababbababababababbababababababababababbababababbababababbababababbabababababababbaba', "We couldn’t find a match for your search.")

    })

}) 

describe('clicking every dropdown in the New & Featured menu', () => {
    it('using nav bar to enter every link', async () => {
        await Menu.baseUrl()
        
        await Menu.menuDrop('Clearance')
        
    })

}) 


describe('checking cart to add instock, out of stock and cart limits ', () => {
    it('adds item at max quantity, enters cart, changes shipping options then deletes item', async () => {
        await ShopCart.baseUrl()
        
        await ShopCart.cartSearch('toilet paper', 'Your cart is empty')

    })

}) 