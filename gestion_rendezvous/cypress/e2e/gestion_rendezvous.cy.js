describe('Gestion de rendezvous', () => {

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
  it("CA_3 : Ajouter un rendezvous", () => {

    cy.get("#date").type("2026-08-06");

    cy.get("#heure").type("10:30");

    cy.get("#description").type("Dentiste");

    cy.contains("button", "Ajouter").click();

    cy.contains("Dentiste").should("exist");

    cy.contains("2026-08-06").should("exist");

    cy.contains("10:30").should("exist");
    
  });

  

});  
