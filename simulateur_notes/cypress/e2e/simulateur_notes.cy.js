describe('Simulateur de notes', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8000');
  });

  it("CA_1 : moyenne >= 10 => Validé", () => {
    
    cy.get('input[name="note1"]').type('12');
    cy.get('input[name="note2"]').type('10');
    cy.get('input[name="note3"]').type('14');

    cy.get('button[type="submit"]').click();

    cy.contains('Moyenne').should('contain', '12');
    cy.contains('Statut').should('contain', 'Validé');
    
  });

  it("CA_2 : moyenne >= 8 et < 10 => Rattrapage", () => {
    
    cy.get('input[name="note1"]').type('8');
    cy.get('input[name="note2"]').type('8');
    cy.get('input[name="note3"]').type('9');

    cy.get('button[type="submit"]').click();

    cy.contains('Moyenne').should('contain', '8.33');
    cy.contains('Statut').should('contain', 'Rattrapage');
  });

  it("CA_3 : moyenne < 8 => Non validé", () => {
   
    cy.get('input[name="note1"]').type('8');
    cy.get('input[name="note2"]').type('8');
    cy.get('input[name="note3"]').type('7');

    cy.get('button[type="submit"]').click();

    cy.contains('Moyenne').should('contain', '7.67');
    cy.contains('Statut').should('contain', 'Non validé');
  });
});
