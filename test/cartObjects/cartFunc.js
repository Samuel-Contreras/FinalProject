import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import CartFlash from './cartFlash.js'
import Https from '../mainUrl.js';

class ShopCart extends Https {

    get cartBtn () {
        return $('/div[@class="styles__Container-sc-8s5b77-0 eWqVnX l-container-fixed"]/nav/a[@data-test="@web/CartLink"]')
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
        return $('//div[@class="children"]/div[@class="styles__ButtonWrapper-sc-519sqw-1 clSiPU"]/a[@value="Mega XL"]')
    }

    get addToCart () {
        return $('//div[@class="styles__ThreeUpButtonWrapper-sc-11rka0i-0 gfFifD"]/div[@style="display: flex;"]/button[@type="button"]')
    }

    /*get closeBtn () {
        return $('/html/body/div[60]/div/div/div[2]/div[3]/button')
    }*/

    get deliveryBtn () {
        return $('//div[@class="styles__StyledFulfillmentOptions-sc-mtsyds-0 ybqLe"]/button[@data-test="fulfillment-cell-delivery"]')
    }

    get mega () {
        return $('//div[@class="children"]/div[@class="styles__ButtonWrapper-sc-519sqw-1 clSiPU"]/a[@value="Mega"]')
    }

    get noStockBtn () {
        return $('/html/body/div[1]/div[2]/main/div/div[1]/div[3]/div[2]/div/div[5]/div/div/div[2]/div[2]/div/button')
    }

    get qtyBtn () {
        return $('/html/body/div[1]/div[2]/main/div/div[1]/div[3]/div[2]/div/div[5]/div/div/div[2]/div[2]/div/div/div/button')
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
        return $('//div[@data-test="ShippingFulfillment"]/input[@type="radio"]')
    }

    get removeItemBtn () {
        return $('//div[@aria-label="cart item ready to fulfill"]/div/button[@data-test="cartItem-deleteBtn"]')
    }


    async cartSearch (item, itemVer) {
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
        await expect(CartFlash.emptyCartFlash).toHaveTextContaining(itemVer)
    }

    baseUrl () {
        return super.baseUrl();
     }

}

export default new ShopCart();