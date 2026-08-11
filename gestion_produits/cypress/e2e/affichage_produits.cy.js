describe('Affichage des produits', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8000');
  });

  it("CA_1 : Une liste des produits est affichée", () => {
    cy.contains("Liste des produits");

    cy.get("table").should("be.visible");
    cy.get("tbody").should("exist");
  });

  it("CA_2 : Chaque produit affiche son nom et son prix", () => {
    cy.get("tbody tr").then(($rows) => {

      // On ignore le cas où la liste est vide
      if (!$rows.text().includes("Aucun produit enregistré")) {

        cy.get("tbody tr").each(($row) => {
          cy.wrap($row).find("td").eq(1).should("not.be.empty"); // Nom
          cy.wrap($row).find("td").eq(2).should("not.be.empty"); // Prix
        });
    
      }
    });
  });

  it("CA_3 : Un bouton Supprimer est disponible pour chaque produit, visible et cliquable", () => {

    cy.get("tbody tr").then(($rows) => {

      // On ne fait le test que s'il existe des produits
      if (!$rows.text().includes("Aucun produit enregistré")) {

        cy.get("tbody tr").each(($row) => {

          cy.wrap($row)
            .contains("button", "Supprimer")
            .should("be.visible")
            .and("be.enabled");

        });

      }

    });

  });


});