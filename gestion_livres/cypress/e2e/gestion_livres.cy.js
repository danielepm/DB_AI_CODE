describe('Gestion de livres', () => {

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
  it("CA_3 : Ajouter un livre", () => {

    cy.get("#titre").type("Le Petit Prince");
    cy.get("#auteur").type("Saint Exupéry");
    

    cy.contains("button", "Ajouter").click();

    cy.contains("Le Petit Prince");
    cy.contains("Saint Exupéry");
  });

  

});  
