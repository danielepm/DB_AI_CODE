import CompteurMotsPage from "../pages/CompteurMotsPage"

const page = new CompteurMotsPage()

describe("Projet Compteur de mots", () => {

  beforeEach(() => {
    page.visit()
  })

// ====================================
// Tests de l'interface
// ====================================

  describe("Interface", () => {

    it("Charge la page d'accueil", () => {
      cy.contains("Compteur de mots").should("be.visible")
    })

    it("Affiche le formulaire", () => {
      page.textArea.should("be.visible")
      page.analyzeButton.should("contain", "Analyser")
    })

  })

// ====================================
// Cas nominaux de compteur mots
// ====================================

  describe("Cas nominaux", () => {

    it("CT-02 - Compte correctement un seul mot", () => {

      page.enterText("Bonjour")

      page.analyze()

      page.resultsTitle.should("be.visible")
      page.verifyWordCount(1)

    })

    it("CT-03 - Analyse un texte avec plusieurs espaces", () => {

      page.enterText("Bonjour     tout     le     monde")

      page.analyze()

      page.verifyWordCount(4)

    })

    it("CT-04 - Analyse un texte avec ponctuation", () => {

      page.enterText("Bonjour, tout le monde !")

      page.analyze()

      page.verifyWordCount(4)

    })

    it("CT-05 - Analyse un texte multiligne", () => {

      page.enterText("Bonjour tout le monde{enter}Comment allez-vous")

      page.analyze()

      page.verifyWordCount(7)

    })

  })

// ======================================
// Cas limites/validations compteur mots
// ======================================

  describe("Cas limites / validations", () => {

    it("CT-01 - Analyse un texte vide", () => {

      page.enterText("")

      page.analyze()

      page.verifyWordCount(0)
      page.verifyCharacterCount(0)
      page.verifySentenceCount(0)

    })

    it("CT-06 - Analyse un texte contenant uniquement des espaces", () => {

      page.enterText("     ")

      page.analyze()

      page.verifyWordCount(0)
      page.verifyCharacterCount(5)
      page.verifySentenceCount(0)

    })

    it("CT-07 - Analyse un texte contenant uniquement des retours à la ligne", () => {

      page.enterText("{enter}{enter}{enter}")

      page.analyze()

      page.verifyWordCount(0)
      page.verifyCharacterCount(6)
      page.verifySentenceCount(0)

    })

    it("CT-08 - Analyse un texte contenant uniquement de la ponctuation", () => {

      page.enterText("!!!???...")

      page.analyze()

      page.verifyWordCount(0)
      page.verifyCharacterCount(9)
      page.verifySentenceCount(0)

    })

    it("CT-09 - Analyse un texte composé uniquement de chiffres", () => {

      page.enterText("12345")

      page.analyze()

      page.verifyWordCount(1)
      page.verifyCharacterCount(5)
      page.verifySentenceCount(1)

    })

    it("CT-10 - Analyse un texte alphanumérique", () => {

      page.enterText("Bonjour123")

      page.analyze()

      page.verifyWordCount(1)
      page.verifyCharacterCount(10)
      page.verifySentenceCount(1)

    })
  })

})