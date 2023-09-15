import loginPage from "../pages/loginPage";

Cypress.Commands.add('login', (user) => {
    const logIn = new loginPage();
    
    logIn.visit();
    logIn.usernameInput.type(user.username);
    logIn.passwordInput.type(user.password);
    logIn.logInButton.click();
})
