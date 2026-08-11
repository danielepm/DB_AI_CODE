describe('Suppression du produit', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8000');

  });  
    
it("CA_1 : Cliquer sur le bouton Supprimer, une popup de confirmation s'affiche, Cliquer sur Annuler", () => {

    cy.on("window:confirm", (message) => {
      expect(message).to.equal("Voulez-vous vraiment supprimer ce produit ?");
      return false; // Simule un clic sur Annuler

      cy.contains("tr", "Ordinateur")
        .find("button")
        .click();

      cy.contains("Ordinateur").should("exist");

    });
});
  // supprime le 1er de la liste
   it("CA_2 : Le produit est supprimé après un clic sur OK", () => {

    cy.on("window:confirm", () => true); // Simule un clic sur OK

    cy.contains("Le Petit Prince").should("exist");

    cy.contains("button", "Supprimer").click();

    cy.contains("Le Petit Prince").should("not.exist");
  });

});