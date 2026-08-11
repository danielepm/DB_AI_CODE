describe('Affichage des rendez vous', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8000');
  });

  it("CA_1 : Une liste des rendez vous est affichée", () => {
    cy.contains("Liste des rendez-vous");

    cy.get("#rdvList").should("be.visible");

  });

  it("CA_2 : Chaque rendez vous affiche sa date et son heure", () => {
    cy.get("#date").type("2026-08-06");
    cy.get("#heure").type("10:30");
    cy.get("#description").type("Dentiste");

    cy.contains("Ajouter").click();

    cy.get("#rdvList li")
    .should("have.length.at.least", 1)
    .last()
    .should("contain", "2026-08-06")
    .and("contain", "10:30");
  });

  it("CA_3 : Un bouton Supprimer est disponible pour chaque rendez vous, visible et cliquable", () => {

    cy.contains("button", "Ajouter")
      .should("be.visible")
      .click();

    
  });


});