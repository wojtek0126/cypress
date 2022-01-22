/// <reference types="cypress" />
// wip
context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://preview.gamma.playlostark.com/en-us/twitch-drops-alpha')
    })
  
    // https://on.cypress.io/interacting-with-elements
  
    it('.type() - type into a DOM element', () => {
              // https://on.cypress.io/type
            //   id="signInFormUsername" id="signInFormPassword"class="btn btn-primary submitButton-customizable"
              cy.window().should().contains("TWITCH DROPS")

    // cy.get('.ags-SiteHeader-navigation-item-label').contains("Game").as('navMenuDropdown')      
        
    //     cy.get('@navMenuDropdown').click()
    //     cy.get('.ags-SiteHeader-navigation-item-submenu-item-label').contains("FAQ").click()
    //     cy.get('.ags-FaqModule-container-entry-panel-question').click({ multiple: true, timeout: 100000})    
       })
    })