import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import CartFlash from './cartFlash.js'
import CartHttps from './cartUrl.js'

class ShopCart extends CartHttps {

    get cartBtn () {
        return $('/html/body/div[1]/div[2]/div[2]/div/nav/a[5]')
    }
    
    get searchingInput () {
        return $('#search')
    }

    get searchingBtn () {
        return $('.styles__SearchButton-sc-wnzihy-3')
    }

    get toiletPaper () {
        return $('//a[contains(text(),"Charmin Ultra Strong Toilet Paper")]')
    }

    get megaXl () {
        return $('/html/body/div[1]/div[2]/main/div/div[1]/div[3]/div[2]/div/div[1]/div[4]/div[1]/div[2]/div/div[1]/a')
    }

    get addToCart () {
        return $('/html/body/div[1]/div[2]/main/div/div[1]/div[3]/div[2]/div/div[2]/div/div/div[2]/div[2]/div/button')
    }

    get closeBtn () {
        return $('/html/body/div[60]/div/div/div[2]/div[3]/button')
    }

    get deliveryBtn () {
        return $('/html/body/div[1]/div[2]/main/div/div[1]/div[3]/div[2]/div/div[2]/div/div/div[1]/button[2]')
    }

    get mega () {
        return $('/html/body/div[1]/div[2]/main/div/div[1]/div[3]/div[2]/div/div[1]/div[4]/div[1]/div[2]/div/div[2]/a')
    }

    get noStockBtn () {
        return $('/html/body/div[1]/div[2]/main/div/div[1]/div[3]/div[2]/div/div[2]/div/div/div[2]/div[2]/div/button')
    }

    get qtyBtn () {
        return $('/html/body/div[1]/div[2]/main/div/div[1]/div[3]/div[2]/div/div[2]/div/div/div[2]/div[2]/div/div/div/button/span[2]')
    }

    get maxQtyBtn () {
        return $('//div[text()="10"]')
    }

    get checkoutBtn() {
        return $('//a[text()="View cart & check out"]')
    }

    get closeSameDayBtn () {
        return $('#__next')
    }

    get shipping() {
        return $('/html/body/div[1]/div[2]/div[4]/div/div[1]/div[1]/div[2]/div/div/div[3]/div[2]/div/div[1]/div/div[2]/div/div/fieldset/div[1]/input')
    }

    get removeItemBtn () {
        return $('/html/body/div[1]/div[2]/div[4]/div/div[1]/div[1]/div[2]/div/div/div[3]/div[3]/button')
    }


    async cartSearch (item) {
        await this.searchingInput.clearValue();
        await this.searchingInput.setValue(item);
        await this.searchingBtn.click();
        await this.toiletPaper.scrollIntoView({ behavior: "smooth"});
        await this.toiletPaper.click();
        await this.mega.click();
        await this.deliveryBtn.click();
        await this.noStockBtn.click();
        await this.megaXl.click();
        await this.megaXl.scrollIntoView({ behavior: "smooth"});
        await this.qtyBtn.click();
        await this.qtyBtn.scrollIntoView({ behavior: "smooth"});
        await this.maxQtyBtn.scrollIntoView({ behavior: "smooth"});
        await this.maxQtyBtn.click()
        await this.addToCart.click();
        await this.checkoutBtn.click();
        await this.closeSameDayBtn.click();
        await this.shipping.click();
        await this.removeItemBtn.click();
        await expect(CartFlash.emptyCartFlash).toBeExisting()
        await expect(CartFlash.emptyCartFlash).toHaveTextContaining('Your cart is empty')
    }

    cartUrl () {
        return super.cartUrl();
     }

}

export default new ShopCart();