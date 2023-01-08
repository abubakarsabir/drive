import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import { learnPage } from "@pages/LearnPage";
  Given("A web browser is at the learn website main page", () => {
    cy.visit('/', {
        headers: {
            'accept': 'application/json, text/plain, */*',
            'user-agent': 'axios/0.27.2'
        }
    });
  });

  When("A user click on FAQ", () => {
    cy.intercept('GET', '**/faq' ,{
      headers: {
          'accept': 'application/json, text/plain, */*',
          'user-agent': 'axios/0.27.2'
      }
    }).as("FAQ")
    learnPage.elements.FAQButton().invoke('show').click({force: true})
    cy.wait(5000);
  });
  Then("Navigated successfully to FAQ Page", () => {
    cy.url().should('include', 'faq')
    learnPage.elements.FAQHeader().should('be.visible')
  });

  When("A user click on Welcome to Drive", () => {
    learnPage.elements.WelcomeButton().invoke('show').click({force: true})
  });
  Then("Navigated successfully to Welcome to Drive", () => {
    learnPage.elements.WelcomeUrl().should('be.visible')
  });

  When("A user click on How to use the Budget Customizer", () => {
    learnPage.elements.BudgetButton().invoke('show').click({force: true})
  });
  Then("Navigated successfully to How to use the Budget Customizer", () => {
    learnPage.elements.BudgetUrl().should('be.visible')
  });

  When("A user click on 5 reasons to get pre-qualified for auto financing", () => {
    learnPage.elements.prequalifiedButton().invoke('show').click({force: true})
  });
  Then("Navigated successfully to 5 reasons to get pre-qualified for auto financing", () => {
    learnPage.elements.prequalifiedUrl().should('be.visible')
  });

  When("A user click on How car payments can help your credit score", () => {
    learnPage.elements.paymentButton().invoke('show').click({force: true})
  });
  Then("Navigated successfully to How car payments can help your credit score", () => {
    learnPage.elements.paymentUrl().should('be.visible')
  });

