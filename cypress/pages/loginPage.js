class loginPage{
    path = '/';

    get usernameInput() {
        return cy.get('input[id="user-name"]');
    }

    get passwordInput() {
        return cy.get('input[id="password"]');
    }

    get logInButton() {
        return cy.get('input[id="login-button"]');
    }

    visit() {
        cy.visit(this.path);
    }
}

export default loginPage;