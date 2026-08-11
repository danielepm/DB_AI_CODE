describe("Validation des champs obligatoires", () => {

  beforeEach(() => {
    cy.visit("http://localhost:8000");
  });

  // CA_1
  it("CA_1 - Laisser le titre vide vide", () => {

    cy.get("#auteur").type("Saint Exupéry");
    cy.get("#titre").clear();  
    cy.contains("button", "Ajouter").click();

    cy.get("#titre")
      .then(($input) => {
        expect($input[0].checkValidity()).to.be.false;
        expect($input[0].validationMessage).to.not.equal("");
      });

  });

  // CA_2
  it("CA_2 - Laisser l'auteur vide ", () =>{

    cy.get("#titre").type("Le Petit Prince");
    cy.get("#auteur").clear();
    cy.contains("button", "Ajouter").click();

    cy.get("#auteur")
      .then(($input) => {
        expect($input[0].checkValidity()).to.be.false;
        expect($input[0].validationMessage).to.not.equal("");
      });

  });

});