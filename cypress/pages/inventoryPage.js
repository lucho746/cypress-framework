class inventoryPage {
    path = '/inventory.html';

    get addBackPackItemToCart() {
        return cy.get('button[id="add-to-cart-sauce-labs-backpack"]');
    };

    get removeBackPackFromCart() {
        return cy.get('button[id="remove-sauce-labs-backpack"]');
    };

    get shoppingCartBadge() {
        return cy.get('a > span[class="shopping_cart_badge"]');
    };

    visit() {
        cy.visit(this.path);
    };
}

export default inventoryPage;