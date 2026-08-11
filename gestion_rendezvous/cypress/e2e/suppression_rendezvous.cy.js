describe('Suppression du rendezvous', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8000');

  });  
    

  // supprime le 1er de la liste
   it("CA_1 : Cliquer sur Supprimer ,Le rdv est supprimé ", () => {

    const description = "Dentiste" ;

  cy.get("#date").type("2026-08-08");
  cy.get("#heure").type("10:30");
  cy.get("#description").type(description);

  cy.contains("Ajouter").click();

  cy.contains("#rdvList li", description)
    .should("exist")
    .within(() => {
      cy.contains("Supprimer").click();
    });

  cy.contains("#rdvList li", description).should("not.exist");
  });

});