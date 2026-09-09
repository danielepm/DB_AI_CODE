
/**
 * ==========================================================
 * File        : ConverterPage.js
 * Project     : Convertisseur d'unités
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
 * Created     : 24/07/2026
 * ==========================================================
 */

class ConverterPage {

// ==========================
// Navigation
// ==========================

    visit() {
        cy.visit("/")
    }

// ==========================
// Getters
// ==========================

    get valueInput() {
        return cy.get("#value")
    }

    get categorySelect() {
        return cy.get("#category")
    }

    get fromUnitInput() {
        return cy.get("#from_unit")
    }

    get toUnitInput() {
        return cy.get("#to_unit")
    }

    get convertButton() {
        return cy.get("#convertButton")
    }

    get result() {
        return cy.get("#result")
    }
    
// ==========================
// Actions utilisateur
// ==========================
    
    enterValue(value) {
        this.valueInput
            .clear()
            .type(value)
    }

    selectCategory(category) {
        this.categorySelect
            .select(category)
    }

    enterFromUnit(unit) {
        this.fromUnitInput
            .clear()
            .type(unit)
    }

    enterToUnit(unit) {
        this.toUnitInput
            .clear()
            .type(unit)
    }

    clickConvert() {
        this.convertButton
            .click()
    }

// ==========================
// Business Methods
// ==========================

    convert(value, category, fromUnit, toUnit) {

        this.enterValue(value)
        this.selectCategory(category)
        this.enterFromUnit(fromUnit)
        this.enterToUnit(toUnit)

        this.clickConvert()

    }

// ==========================
// Verifications
// ==========================

    verifyResult(expected) {

        this.result
            .should("contain", expected)

    }
}

export default new ConverterPage()

