describe('Saisie du titre', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8000');
  });

 it("CA_1 : Le champ titre est affiché et cliquable", () => {
    cy.get("#titre")
      .should("be.visible")
      .and("be.enabled")
      .click();
  });

  it("CA_2 : Le champ titre accepte les caractères alphanumériques", () => {
    const titreLivre = "Le Petit Prince";

    cy.get("#titre")
      .clear()
      .type(titreLivre)
      .should("have.value", titreLivre);
  });
  

});  
