/**
 * ==========================================================
 * File        : CurrencyConverterPage.js
 * Project     : Currency_Converter
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
 * Created     : 17/08/2026
 * ==========================================================
 */
class CurrencyConverterPage {

// ==========================
// Navigation
// ==========================

    visit() {
        cy.visit("/")
    }

// ==========================
// Getters
// ==========================

    get amountInput() {
        return cy.get("#amount")
    }

    get fromCurrencySelect() {
        return cy.get("#from_currency")
    }

    get toCurrencySelect() {
        return cy.get("#to_currency")
    }

    get convertButton() {
        return cy.get("#convert_btn")
    }

    get result() {
        return cy.get("#result")
    }

// ==========================
// Actions utilisateur
// ==========================

    enterAmount(amount) {
        this.amountInput
            .clear()
            .type(amount)
    }

    selectFromCurrency(currency) {
        this.fromCurrencySelect
            .select(currency)
    }

    selectToCurrency(currency) {
        this.toCurrencySelect
            .select(currency)
    }

    clickConvert() {
        this.convertButton
            .click()
    }

// ==========================
// Business Methods
// ==========================

    convert(amount, fromCurrency, toCurrency) {
        this.enterAmount(amount)
        this.selectFromCurrency(fromCurrency)
        this.selectToCurrency(toCurrency)
        this.clickConvert()
    }

// ==========================
// Verifications
// ==========================

    verifyPageVisible() {
        cy.contains("Convertisseur de devises")
    }

    verifyResult(expected) {
        this.result
            .should("contain", expected)
    }
}

export default new CurrencyConverterPage()