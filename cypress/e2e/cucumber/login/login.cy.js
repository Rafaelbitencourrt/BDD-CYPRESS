import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given('A user opens the login page', () => {
  cy.visit('https://www.saucedemo.com/v1/')
})

When('A user enters a username {string}', (username) => {
  cy.get('#user-name').type(username)
})

And('A user enters the password {string}', (password) => {
  cy.get('#password').type(password)
})

And('A user clicks on the login button', () => {
  cy.get('#login-button').click()
})

Then('A user will be on the logged-in page', () => {
  // Adicione aqui verificações que confirmem que o usuário está na página após o login bem-sucedido
  // Isso pode ser feito, por exemplo, verificando a presença de elementos específicos na página de destino.
})
