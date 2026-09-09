describe('Currency Converter', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8000/currency_converter/')
  })

  it('page visible', () => {
    cy.contains('Convertisseur de devises')
  })

  it('EUR vers USD', () => {

    cy.get('#amount').type('100')

    cy.get('#from_currency')
      .select('EUR')

    cy.get('#to_currency')
      .select('USD')

    cy.get('#convert_btn')
      .click()

    cy.get('#result')
      .should('contain', '110')
  })

  it('USD vers EUR', () => {

    cy.get('#amount').type('100')

    cy.get('#from_currency')
      .select('USD')

    cy.get('#to_currency')
      .select('EUR')

    cy.get('#convert_btn')
      .click()

    cy.get('#result')
      .should('contain', '90.91')
  })

})