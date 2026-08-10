/**
 * ==========================================================
 * File        : CompteurMotsPage.js
 * Project     : Compteur des Mots
 * Author      : Bao Quan HUYNH NGUYEN
 * Description : Page Object Model de la page de conversion.
 *
 * Responsibilities:
 *   - Navigation
 *   - Getters
 *   - User Actions
 *   - Business Methods
 *   - Verifications
 *
 * Created     : 06/08/2026
 * ==========================================================
 */

class CompteurMotsPage {

  visit() {
    cy.visit("/")
  }

  get textArea() {
    return cy.get('textarea[name="text"]')
  }

  get analyzeButton() {
    return cy.contains("button", "Analyser")
  }

  get resultsTitle() {
    return cy.contains("h2", "Résultats")
  }

  enterText(text) {
    this.textArea.clear()

    if (text !== "") {
      this.textArea.type(text)
    }
  }

  analyze() {
    this.analyzeButton.click()
  }

  verifyWordCount(expected) {
    cy.contains(`Mots : ${expected}`).should("be.visible")
  }

  verifyCharacterCount(expected) {
    cy.contains(`Caractères : ${expected}`).should("be.visible")
  }

  verifySentenceCount(expected) {
    cy.contains(`Phrases : ${expected}`).should("be.visible")
  }
}

export default CompteurMotsPage