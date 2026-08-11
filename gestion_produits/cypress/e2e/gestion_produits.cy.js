describe('Gestion de produits', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8000');
  });

  it("CA_1 : Le bouton Ajouter est visible", () => {
    cy.contains("button", "Ajouter").should("be.visible");
  });

  it("CA_2 : Le bouton Ajouter est cliquable", () => {
    cy.contains("button", "Ajouter")
      .should("be.visible")
      .and("not.be.disabled")
      .click();
  });
  
  // CA_3
  it("CA_3 : Ajouter un produit", () => {

    cy.get('input[name="name"]').type("Ordinateur");
    cy.get('input[name="price"]').type("800");
    cy.get('button[type="submit"]').click();

    cy.contains("Ordinateur");
    cy.contains("800");
  });

  

});  
