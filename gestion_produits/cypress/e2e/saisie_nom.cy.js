describe('Saisie du nom', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8000');
  });

 it("CA_1 : Le champ nom est affiché et cliquable", () => {
    cy.get('input[name="name"]')
      .should("be.visible")
      .and("be.enabled")
      .click();
  });

  it("CA_2 : Le champ nom accepte les caractères alphanumériques", () => {
    const nomProduit = "Produit123ABC";

    cy.get('input[name="name"]')
      .clear()
      .type(nomProduit)
      .should("have.value", nomProduit);
  });
  

});  
