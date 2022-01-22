/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://www.newworld.com/en-us/')
    })
  
    // https://on.cypress.io/interacting-with-elements
  
    it('.type() - type into a DOM element', () => {
              // https://on.cypress.io/type

    cy.get('.ags-SiteHeader-navigation-item-label').contains("Game").as('navMenuDropdown')      
        
        cy.get('@navMenuDropdown').click()
        cy.get('.ags-SiteHeader-navigation-item-submenu-item-label').contains("FAQ").click()
        cy.get('.ags-FaqModule-container-entry-panel-question').click({ multiple: true, timeout: 100000})    
       })
    })