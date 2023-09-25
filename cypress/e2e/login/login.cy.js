import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";

Given('A user open the login page', ()=>{
    cy.visit('/')
})