// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { scp } from "@pages/ShopCarsPage";
Cypress.Commands.add("filtersTab", () => {
  scp.elements.shopCarsbtn().click();
  cy.url().should(
    "eq",
    Cypress.config().baseUrl + "cars?zip-code=85003&distance=50mi"
  );
  scp.elements
    .headerText()
    .invoke("text")
    .then((text) => {
      expect(text.trim()).equal("Get your rate and customize your terms.");
    });
});
