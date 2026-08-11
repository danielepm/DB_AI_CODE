describe('Saisie du prix', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8000');
  });

 it("CA_1 : Le champ prix est affiché et cliquable", () => {
    cy.get('input[name="price"]')
      .should("be.visible")
      .and("be.enabled")
      .click();
  });

  it("CA_2 : Le champ prix accepte les caractères numériques", () => {
    const prixProduit = "800";

    cy.get('input[name="price"]')
      .clear()
      .type(prixProduit)
      .should("have.value", prixProduit);
  });
  

});  
