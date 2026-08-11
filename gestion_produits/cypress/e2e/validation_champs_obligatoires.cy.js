describe("Validation des champs obligatoires", () => {

  beforeEach(() => {
    cy.visit("http://localhost:8000");
  });

  // CA_1
  it("CA_1 - Laisser le nom vide vide", () => {

    cy.get('input[name="price"]').type("10");

    cy.get('button[type="submit"]').click();

    cy.get('input[name="name"]')
      .then(($input) => {
        expect($input[0].checkValidity()).to.be.false;
        expect($input[0].validationMessage).to.not.equal("");
      });

  });

  // CA_2
  it("CA_2 - Laisser le prix vide ", () =>{

    cy.get('input[name="name"]').type("boite1");
    cy.get('input[name="price"]').clear();
    cy.get('button[type="submit"]').click();

    cy.get('input[name="price"]')
      .then(($input) => {
        expect($input[0].checkValidity()).to.be.false;
        expect($input[0].validationMessage).to.not.equal("");
      });

  });

});