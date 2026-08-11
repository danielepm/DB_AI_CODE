describe('Saisie de l\'heure', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8000');
  });

 it("CA_1 : Le champ heure est affiché et cliquable", () => {
    cy.get("#heure")
      .should("be.visible")
      .and("be.enabled")
      .click();
  });

  

});  
