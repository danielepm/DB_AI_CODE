describe("Validation des champs obligatoires", () => {

  beforeEach(() => {
    cy.visit("http://localhost:8000");
  });

  // CA_1
  it("CA_1 - Laisser la note1 vide", () => {

    cy.get('input[name="note2"]').type("10");
    cy.get('input[name="note3"]').type("11");

    cy.get('button[type="submit"]').click();

    cy.get('input[name="note1"]')
      .then(($input) => {
        expect($input[0].checkValidity()).to.be.false;
        expect($input[0].validationMessage).to.not.equal("");
      });

  });

  // CA_2
  it("CA_2 - Laisser la note2 vide", () => {

    cy.get('input[name="note1"]').type("10");
    cy.get('input[name="note3"]').type("11");

    cy.get('button[type="submit"]').click();

    cy.get('input[name="note2"]')
      .then(($input) => {
        expect($input[0].checkValidity()).to.be.false;
        expect($input[0].validationMessage).to.not.equal("");
      });

  });

       // CA_3
  it("CA_3 - Laisser la note3 vide", () => {

    cy.get('input[name="note1"]').type("10");
    cy.get('input[name="note2"]').type("10");

    cy.get('button[type="submit"]').click();

    cy.get('input[name="note3"]')
      .then(($input) => {
        expect($input[0].checkValidity()).to.be.false;
        expect($input[0].validationMessage).to.not.equal("");
      });

  });

});