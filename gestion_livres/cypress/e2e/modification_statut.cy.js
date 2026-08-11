describe('Modification du statut', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8000');

  });  
    
 it("CA_1 : Le nouveau statut est affiché après le clic sur le bouton", () => {

    cy.get("#books li").first().then(($li) => {

      const ancienStatut = $li.text().includes("disponible")
        ? "disponible"
        : "emprunté";

      const nouveauStatut =
        ancienStatut === "disponible"
          ? "emprunté"
          : "disponible";

      cy.wrap($li)
        .contains("button", "changer statut")
        .click();

      cy.get("#books li")
        .first()
        .should("contain", nouveauStatut);

    });

  });
  

});