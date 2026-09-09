import ContactsPage from "../pages/ContactsPage"

describe("Gestionnaire de contacts", () => {

    beforeEach(() => {
        cy.request("DELETE", "/test/contacts")
        ContactsPage.visit()
    })
// ====================================
// Cas nominaux de gestion des contacts
// ====================================

    it("CT-01 - Ajoute un contact", () => {
      ContactsPage.addContact(
          "Jean Dupont",
          "jean@test.fr",
          "+33612345678"
      )

      ContactsPage.verifyContact(
          "Jean Dupont",
          "jean@test.fr",
          "+33612345678"
      )
    })

    it("CT-02 - Supprime un contact", () => {

      ContactsPage.addContact(
          "Jean Dupont",
          "jean@test.fr",
          "+33612345678"
      )

      ContactsPage.verifyContact(
          "Jean Dupont",
          "jean@test.fr",
          "+33612345678"
      )

      ContactsPage.deleteContact("Jean Dupont")

      ContactsPage.verifyContactNotPresent("Jean Dupont")
    })

// ====================================
// Cas limites de gestion des contacts
// ====================================

    it("CT-03 - Nom limité à 50 caractères", () => {

      const nomTresLong =
          "Jean-Baptiste Alexandre Maximilien de La Fontaine-Rousseau-Beaumont"

      ContactsPage.addContact(
          nomTresLong,
          "jean.baptiste@test.fr",
          "+33612345678"
      )
 // Vérifie que le champ HTML Nom est limité à 50 caractères
      cy.get("#nom")
          .invoke("val")
          .should("have.length", 50)

      const nomLimite = nomTresLong.substring(0, 50)

      ContactsPage.verifyContact(
          nomLimite,
          "jean.baptiste@test.fr",
          "+33612345678"
      )
    })

    it("CT-04 - Email très long", () => {

      const emailTresLong =
          "jean.dupont.abcdefghijklmnopqrstuvwxyz@test.fr"

      ContactsPage.addContact(
          "Jean Dupont",
          emailTresLong,
          "+33612345678"
      )

      ContactsPage.verifyContact(
          "Jean Dupont",
          emailTresLong,
          "+33612345678"
      )
    })

    it("CT-05 - Téléphone trop long", () => {

      ContactsPage.addContactExpectingError(
          "Jean Dupont",
          "jean@test.fr",
          "+3361234567890123"
      )

      ContactsPage.verifyContactNotPresent("Jean Dupont")

    })

    it("CT-06 - Nom avec espaces en début et en fin", () => {

      const nomAvecEspaces = " Jean Dupont "

      ContactsPage.addContact(
          nomAvecEspaces,
          "jean@test.fr",
          "+33612345678"
      )

      cy.get("#nom")
          .invoke("val")
          .should("eq", nomAvecEspaces)

      ContactsPage.verifyContact(
          "Jean Dupont",
          "jean@test.fr",
          "+33612345678"
      )

    })

    it("CT-07 - Nom avec caractères spéciaux et Unicode", () => {

      ContactsPage.addContact(
          "Nguyễn Văn An",
          "jean@test.fr",
          "+33612345678"
      )

      ContactsPage.verifyContact(
          "Nguyễn Văn An",
          "jean@test.fr",
          "+33612345678"
      )
    })

    it("CT-08 - Email au format minimal", () => {

      ContactsPage.addContact(
          "Jean Dupont",
          "a@b.fr",
          "+33612345678"
      )

      ContactsPage.verifyContact(
          "Jean Dupont",
          "a@b.fr",
          "+33612345678"
      )
    })

    it("CT-09 - Téléphone avec espaces refusé", () => {

      ContactsPage.addContactExpectingError(
          "Jean Dupont",
          "jean@test.fr",
          "06 12 34 56 78"
      )

      ContactsPage.verifyContactNotPresent("Jean Dupont")
    })

// =======================================
// Cas validations de gestion des contacts
// =======================================

    it("CT-10 - Nom vide", () => {

      ContactsPage.addContactExpectingError(
          "",
          "jean@test.fr",
          "+33612345678"
      )

      ContactsPage.verifyContactListEmpty()
    })

    it("CT-11 - Email vide", () => {

      ContactsPage.addContactExpectingError(
          "Jean Dupont",
          "",
          "+33612345678"
      )

      ContactsPage.verifyContactNotPresent("Jean Dupont")
    })

    it("CT-12 - Téléphone vide", () => {

      ContactsPage.addContactExpectingError(
          "Jean Dupont",
          "jean@test.fr",
          ""
      )

      ContactsPage.verifyContactNotPresent("Jean Dupont")
    })

    it("CT-13 - Email au format invalide", () => {

      ContactsPage.addContactExpectingError(
          "Jean Dupont",
          "jean.test.fr",
          "+33612345678"
      )

      ContactsPage.verifyContactNotPresent("Jean Dupont")
    })

    it("CT-14 - Téléphone avec lettres", () => {

      ContactsPage.addContactExpectingError(
          "Jean Dupont",
          "jean@test.fr",
          "+33612AB5678"
      )

      ContactsPage.verifyContactNotPresent("Jean Dupont")
    })

    it("CT-15 - Tous les champs vides", () => {

      ContactsPage.addContactExpectingError(
          "",
          "",
          ""
      )

      cy.get("#contacts li")
          .should("not.exist")
    })

})
