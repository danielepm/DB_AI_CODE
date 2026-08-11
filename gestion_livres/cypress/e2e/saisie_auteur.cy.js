describe('Saisie de l\'auteur', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8000');
  });

 it("CA_1 : Le champ auteur est affiché et cliquable", () => {
    cy.get("#auteur")
      .should("be.visible")
      .and("be.enabled")
      .click();
  });

  it("CA_2 : Le champ auteur accepte les caractères alphanumériques", () => {
    const auteurLivre = "Saint Exupéry";

    cy.get("#auteur")
      .clear()
      .type(auteurLivre)
      .should("have.value", auteurLivre);
  });
  

});  
