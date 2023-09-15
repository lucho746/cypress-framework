class shoppingCartPage {
    path = '/cart.html'

    get inventoryItemName() {
        return cy.get('a > div[class="inventory_item_name"]');
    }
}

export default shoppingCartPage;