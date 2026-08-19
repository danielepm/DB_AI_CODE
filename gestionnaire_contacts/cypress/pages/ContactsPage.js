
/**
 * ==========================================================
 * File        : ContactsPage.js
 * Project     : Gestionnaire de contacts
 * Author      : Bao Quan HUYNH NGUYEN
 * Description : Page Object Model de la page de gestion des contacts.
 *
 * Responsibilities:
 *   - Navigation
 *   - Getters
 *   - User Actions
 *   - Business Methods
 *   - Verifications
 *
 * Created     : 31/07/2026
 * ==========================================================
 */
class ContactsPage {

    visit() {
        cy.visit("/")
    }

    fillName(nom) {
        cy.get("#nom").clear().type(nom)
    }

    fillEmail(email) {
        cy.get("#email").clear().type(email)
    }

    fillPhone(telephone) {
        cy.get("#telephone").clear().type(telephone)
    }

    addContact(nom, email, telephone) {
        this.fillName(nom)
        this.fillEmail(email)
        this.fillPhone(telephone)

        cy.get('button[onclick="addContact()"]').click()
    }

    verifyContact(nom, email, telephone) {
        cy.get("#contacts")
            .should("contain", nom)
            .and("contain", email)
            .and("contain", telephone)
    }

    deleteContact(nom) {
        cy.contains("#contacts li", nom)
            .find("button")
            .click()
    }

    verifyContactNotPresent(nom) {
        cy.get("#contacts")
            .should("not.contain", nom)
    }

   addContactExpectingError(nom, email, telephone) {

        cy.intercept("POST", "/contacts").as("addContactError")

        if (nom !== "") {
            this.fillName(nom)
        } else {
            cy.get("#nom").clear()
        }

        if (email !== "") {
            this.fillEmail(email)
        } else {
            cy.get("#email").clear()
        }

        if (telephone !== "") {
            this.fillPhone(telephone)
        } else {
            cy.get("#telephone").clear()
        }

        cy.get('button[onclick="addContact()"]').click()

        cy.wait("@addContactError")
            .its("response.statusCode")
                .should("eq", 422)
    }

    verifyContactListEmpty() {
        cy.get("#contacts")
            .should("be.empty")
    }

}

export default new ContactsPage()