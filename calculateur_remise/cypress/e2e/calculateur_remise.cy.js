describe('Calculatrice de remise', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8000');
  });

  // CA_1
  it('CA_1 - Remise en pourcentage : le montant économisé est supérieur ou égal au prix initial => résultat = 0', () => {
    cy.get('input[name="prix_initial"]').clear().type('100');
    cy.get('input[name="valeur_remise"]').clear().type('150');
    cy.get('select[name="type_remise"]').select('pourcentage');

    cy.get('button[type="submit"]').click();

    cy.contains('Nouveau prix').should('contain', '0');
    cy.contains('Économie').should('contain', '0');
  });

  // CA_2
  it('CA_2 - Remise en pourcentage : le montant économisé est inférieur au prix initial', () => {
    cy.get('input[name="prix_initial"]').type('200');
    cy.get('input[name="valeur_remise"]').type('20');
    cy.get('select[name="type_remise"]').select('pourcentage');

    cy.get('button[type="submit"]').click();

    // 20 % de 200 = 40
    cy.contains('Nouveau prix').should('contain', '160');
    cy.contains('Économie').should('contain', '40');
  });

  // CA_3
  it('CA_3 - Remise fixe : le montant économisé est supérieur ou égal au prix initial => résultat = 0', () => {
    cy.get('input[name="prix_initial"]').clear().type('100');
    cy.get('input[name="valeur_remise"]').clear().type('150');
    cy.get('select[name="type_remise"]').select('fixe');

    cy.get('button[type="submit"]').click();

    cy.contains('Nouveau prix').should('contain', '0');
    cy.contains('Économie').should('contain', '0');
  });

  // CA_4
  it('CA_4 - Remise fixe : le montant économisé est inférieur au prix initial', () => {
    cy.get('input[name="prix_initial"]').clear().type('200');
    cy.get('input[name="valeur_remise"]').clear().type('50');
    cy.get('select[name="type_remise"]').select('fixe');

    cy.get('button[type="submit"]').click();

    cy.contains('Nouveau prix').should('contain', '150');
    cy.contains('Économie').should('contain', '50');
  });

});
