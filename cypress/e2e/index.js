import inventoryPage from "../pages/inventoryPage";
import shoppingCartPage from "../pages/shoppingCartPage";

describe('Should be able to login and add an item to the cart', () => {
    const inventory = new inventoryPage();
    const cart = new shoppingCartPage();

    it('Test for login and add item to cart', () => {
        //Login command and validate URL
        cy.login({ username: 'standard_user', password: 'secret_sauce' });
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');

        //Add Backpack item to cart
        inventory.shoppingCartBadge.should('not.exist');
        inventory.addBackPackItemToCart.click();
        inventory.removeBackPackFromCart.should('exist');
        inventory.shoppingCartBadge.should('have.text', '1');

        //Navigate to cart and validate the item is added
        inventory.shoppingCartBadge.click();
        cart.inventoryItemName.should('have.text', 'Sauce Labs Backpack');
    });
});