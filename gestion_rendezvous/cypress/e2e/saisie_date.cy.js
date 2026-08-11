describe('Saisie de la date', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8000');
  });

 it("CA_1 : Le champ date est affiché et cliquable", () => {
    cy.get("#date")
      .should("be.visible")
      .and("be.enabled")
      .click();
  });

  
});  
