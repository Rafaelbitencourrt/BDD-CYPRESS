import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import homeSaucePage from "../../../pages/homeSaucePage";

Given('A user opens the login page', () => {
  cy.visit('/')
})

When('A user enters a username {string}', (username) => {
  homeSaucePage.typeUsername(username)
})

And('A user enters the password {string}', (password) => {
  homeSaucePage.typePassword(password)
})

And('A user clicks on the login button', () => {
  homeSaucePage.clickLogin()
})

Then('A user will be on the logged-in page', () => {
  cy.url().should('contains', '/inventory.html')
})

Then('A user will be receiving a failed message', () => {
  homeSaucePage.elements.errorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
})