describe('Affichage des livres', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8000');
  });

  it("CA_1 : Une liste des livres est affichée", () => {
    cy.contains("Liste des livres");

    cy.get("#books").should("be.visible");

   
  });

  it("CA_2 : Chaque livre affiche son titre, son auteur et son statut", () => {

    cy.get("#books li").should("have.length.at.least", 1);

    cy.get("#books li").each(($livre) => {

      cy.wrap($livre).invoke("text").then((texte) => {
        expect(texte).to.match(/.+ - .+ \((disponible|emprunté)\)/);
      });

    });

  });

  

  it("CA_3 : Un bouton Changer statut est disponible pour chaque livre, visible et cliquable", () => {

    cy.get("#books li").should("have.length.at.least", 1);
    
    cy.get("#books li").each(($livre)  => {

      cy.wrap($livre)
        .contains("button", "changer statut")
        .should("be.visible")
        .and("be.enabled");

    });

  });

});