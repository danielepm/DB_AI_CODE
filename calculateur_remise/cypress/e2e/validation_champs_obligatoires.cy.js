describe("Validation des champs obligatoires", () => {

  beforeEach(() => {
    cy.visit("http://localhost:8000");
  });

  // CA_1
  it("CA_1 - Laisser le prix initial vide", () => {

    cy.get('input[name="valeur_remise"]').type("20");
    cy.get('select[name="type_remise"]').select("pourcentage");

    cy.get('button[type="submit"]').click();

    cy.get('input[name="prix_initial"]')
      .then(($input) => {
        expect($input[0].checkValidity()).to.be.false;
        expect($input[0].validationMessage).to.not.equal("");
      });

  });

  // CA_2
  it("CA_2 - Laisser la valeur de remise vide", () => {

    cy.get('input[name="prix_initial"]').type("100");
    cy.get('select[name="type_remise"]').select("pourcentage");

    cy.get('button[type="submit"]').click();

    cy.get('input[name="valeur_remise"]')
      .then(($input) => {
        expect($input[0].checkValidity()).to.be.false;
        expect($input[0].validationMessage).to.not.equal("");
      });

  });

});