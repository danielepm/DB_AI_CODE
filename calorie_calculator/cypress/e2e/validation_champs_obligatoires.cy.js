describe("Validation des champs obligatoires", () => {

  beforeEach(() => {
    cy.visit("http://localhost:8000");
  });

  // CA_1
  it("CA_1 - Laisser le poids vide", () => {

    cy.get('input[name="duration"]').type("20");
    cy.get('select[name="activity"]').select("yoga");

    cy.get('button[type="submit"]').click();

    cy.get('input[name="weight"]')
      .then(($input) => {
        expect($input[0].checkValidity()).to.be.false;
        expect($input[0].validationMessage).to.not.equal("");
      });

  });

  // CA_2
  it("CA_2 - Laisser la durée vide", () => {

    cy.get('input[name="weight"]').type("100");
    cy.get('select[name="activity"]').select("yoga");

    cy.get('button[type="submit"]').click();

    cy.get('input[name="duration"]')
      .then(($input) => {
        expect($input[0].checkValidity()).to.be.false;
        expect($input[0].validationMessage).to.not.equal("");
      });

  });

});