/// <reference types="cypress" />
 
context('testar Home Page Torne-se um Programador', () => {
  beforeEach(() => {
    //cy.visit('http://www.torneseumprogramador.com.br/')
    cy.visit('https://www.google.com.br/')
  })

  it('Digitar integração continua no campo de pesquisa', () => {
    cy.get('form').find('input[type=text]').type('torne-se um programador')
    cy.get('form').submit()
    cy.get('#search').get('.r>a').first().click()
    cy.get('#aula').type('integração continua')
    cy.get('form button').click()
    cy.get('.div-card-aulas>a').first().click()
    cy.get('.iframe-aula').should("not.be.undefined")
  })

})