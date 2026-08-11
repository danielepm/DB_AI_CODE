describe('Calculateur de calories', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8000');
  });

  // CA_1
  it('CA_1 - Marche', () => {

    cy.get('select[name="activity"]').select('marche');
    cy.get('input[name="weight"]').type('70');
    cy.get('input[name="duration"]').type('60');

    cy.get('button[type="submit"]').click();

    // 3.5 × 70 × 1 = 245
    cy.contains('245');
  });

  // CA_2
  it('CA_2 - Course', () => {

    cy.get('select[name="activity"]').select('course');
    cy.get('input[name="weight"]').type('70');
    cy.get('input[name="duration"]').type('30');

    cy.get('button[type="submit"]').click();

    // 8 × 70 × 0.5 = 280
    cy.contains('280');
  });

  // CA_3
  it('CA_3 - Vélo', () => {

    cy.get('select[name="activity"]').select('velo');
    cy.get('input[name="weight"]').type('80');
    cy.get('input[name="duration"]').type('60');

    cy.get('button[type="submit"]').click();

    // 7.5 × 80 × 1 = 600
    cy.contains('600');
  });

  // CA_4
  it('CA_4 - Natation', () => {

    cy.get('select[name="activity"]').select('natation');
    cy.get('input[name="weight"]').type('60');
    cy.get('input[name="duration"]').type('60');

    cy.get('button[type="submit"]').click();

    // 6 × 60 × 1 = 360
    cy.contains('360');
  });

  // CA_5
  it('CA_5 - Yoga', () => {

    cy.get('select[name="activity"]').select('yoga');
    cy.get('input[name="weight"]').type('70');
    cy.get('input[name="duration"]').type('90');

    cy.get('button[type="submit"]').click();

    // 3 × 70 × 1.5 = 315
    cy.contains('315');
  });

  // CA_6
  it('CA_6 - Yoga avec durée = 0', () => {

    cy.get('select[name="activity"]').select('yoga');
    cy.get('input[name="weight"]').type('70');
    cy.get('input[name="duration"]').type('0');

    cy.get('button[type="submit"]').click();

    // 3 × 70 × 0 = 0
    cy.contains('0');
  });

  // CA_7
  it('CA_7 - Yoga avec poids = 0', () => {

    cy.get('select[name="activity"]').select('yoga');
    cy.get('input[name="weight"]').type('0');
    cy.get('input[name="duration"]').type('90');

    cy.get('button[type="submit"]').click();

    // 3 × 70 × 0 = 0
    cy.contains('0');
  });

});
