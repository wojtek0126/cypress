/// <reference types="cypress" />
// wip
context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://www.playlostark.com/en-us')
    })
  
    // https://on.cypress.io/interacting-with-elements
  
    it('.type() - type into a DOM element', () => {
        cy.visit('https://www.playlostark.com/en-us/news');
        cy.get('.is-open > .ags-SiteHeader-navigation-item-label').click();
        cy.url().should('contains', 'https://www.playlostark.com/en-us/game/classes');
           
       })
    })