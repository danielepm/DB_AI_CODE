describe('Validation du prix', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8000');
  });

 it("CA_1 : Le prix accepte uniquement des chiffres avec 2 décimales", () => {

    cy.get('input[name="price"]')
      .type("123.45")
      .should("have.value", "123.45");

  });


  it("CA_2 : Les lettres et caractères spéciaux sont refusés", () => {

  cy.get('input[name="price"]')
    .type("abc@#");

  cy.get('input[name="price"]')
    .invoke("val")
    .should("eq", "");

});

it("CA_3 : Un message d'erreur est affiché lorsque le prix est invalide", () => {

  cy.get('input[name="name"]').type("Mobile");

  // 3prix avec 3 chiffres apres la virgule
  cy.get('input[name="price"]')
      .type("123.455")
      .should("have.value", "123.455");
  cy.contains("button", "Ajouter").click();

  cy.get('input[name="price"]').then(($input) => {
    expect($input[0].checkValidity()).to.be.false;
    expect($input[0].validationMessage).to.not.equal("");
  });

});
  

});  
