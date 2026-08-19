
/**
 * ==========================================================
 * File        : ImcCalculatorPage.js
 * Project     : Calculateur IMC
 * Author      : Bao Quan HUYNH NGUYEN
 * Description : Page Object Model de la page du calculateur IMC.
 *
 * Responsibilities:
 *   - Navigation
 *   - Getters
 *   - User Actions
 *   - Business Methods
 *   - Verifications
 *
 * Created     : 11/08/2026
 * ==========================================================
 */

class ImcCalculatorPage {

  visit() {
    cy.visit("/")
  }

  get poidsInput() {
    return cy.get('input[name="poids"]')
  }

  get tailleInput() {
    return cy.get('input[name="taille"]')
  }

  get calculateButton() {
    return cy.contains("Calculer")
  }

  get resultTitle() {
    return cy.get("h2")
  }

  get interpretation() {
    return cy.get('p[style*="color"]')
  }

  get errorMessage() {
    return cy.get('p[style="color:red"]')
  }

  enterPoids(poids) {
    this.poidsInput.clear().type(poids)
  }

  enterTaille(taille) {
    this.tailleInput.clear().type(taille)
  }

  calculate() {
    this.calculateButton.click()
  }

  verifyImc(expected) {
    this.resultTitle.should("contain", "Votre IMC")
    this.resultTitle.should("contain", expected)
  }

  verifyInterpretation(expected) {
    this.interpretation.should("contain", expected)
  }

  verifyError(expected) {
    this.errorMessage.should("contain", expected)
  }

  verifyFormValidation() {
    cy.get("form").then(($form) => {
      expect($form[0].checkValidity()).to.be.false
    })
  }
}

export default ImcCalculatorPage
