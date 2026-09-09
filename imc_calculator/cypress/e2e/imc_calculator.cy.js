import ImcCalculatorPage from "../pages/ImcCalculatorPage"

const imcPage = new ImcCalculatorPage()

describe("Calculateur IMC", () => {

  beforeEach(() => {
    imcPage.visit()
  })

  // ====================================
  // Cas nominaux de calculateur IMC
  // ====================================

  describe("Cas nominaux", () => {

    it("CT-01 - Cas insuffisance pondérale", () => {

      imcPage.enterPoids("50")
      imcPage.enterTaille("1.75")

      imcPage.calculate()

      imcPage.verifyImc("16.3")
      imcPage.verifyInterpretation("Insuffisance pondérale")
    })

    it("CT-02 - Cas corpulence normale", () => {
      
      imcPage.enterPoids("70")
      imcPage.enterTaille("1.75")

      imcPage.calculate()

      imcPage.verifyImc("22.9")
      imcPage.verifyInterpretation("Corpulence normale")
    })

    it("CT-03 - Cas surpoids", () => {
      
      imcPage.enterPoids("80")
      imcPage.enterTaille("1.75")

      imcPage.calculate()

      imcPage.verifyImc("26.1")
      imcPage.verifyInterpretation("Surpoids")
    })

    it("CT-04 - Cas obésité modérée", () => {
      
      imcPage.enterPoids("95")
      imcPage.enterTaille("1.75")

      imcPage.calculate()

      imcPage.verifyImc("31.0")
      imcPage.verifyInterpretation("Obésité modérée")
    })

    it("CT-05 - Cas obésité sévère", () => {
      
      imcPage.enterPoids("110")
      imcPage.enterTaille("1.75")

      imcPage.calculate()

      imcPage.verifyImc("35.9")
      imcPage.verifyInterpretation("Obésité sévère")
    })

    it("CT-06 - Cas obésité morbide", () => {
      
      imcPage.enterPoids("125")
      imcPage.enterTaille("1.75")

      imcPage.calculate()

      imcPage.verifyImc("40.8")
      imcPage.verifyInterpretation("Obésité morbide")
    })

  })

// ====================================
// Cas limites de calculateur IMC
// ====================================

  describe("Cas limites", () => {

    it("CT-07 - Cas insuffisance pondérale", () => {

      imcPage.enterPoids("73.6")
      imcPage.enterTaille("2")

      imcPage.calculate()

      imcPage.verifyImc("18.4")
      imcPage.verifyInterpretation("Insuffisance pondérale")
    })

    it("CT-08 - Cas corpulence normale", () => {

      imcPage.enterPoids("74")
      imcPage.enterTaille("2")

      imcPage.calculate()

      imcPage.verifyImc("18.5")
      imcPage.verifyInterpretation("Corpulence normale")
    })

    it("CT-09 - Cas corpulence normale", () => {

      imcPage.enterPoids("99.6")
      imcPage.enterTaille("2")

      imcPage.calculate()

      imcPage.verifyImc("24.9")
      imcPage.verifyInterpretation("Corpulence normale")
    })

    it("CT-10 - Cas surpoids", () => {

      imcPage.enterPoids("100.0")
      imcPage.enterTaille("2")

      imcPage.calculate()

      imcPage.verifyImc("25.0")
      imcPage.verifyInterpretation("Surpoids")
    })

    it("CT-11 - Cas surpoids", () => {

      imcPage.enterPoids("119.6")
      imcPage.enterTaille("2")

      imcPage.calculate()

      imcPage.verifyImc("29.9")
      imcPage.verifyInterpretation("Surpoids")
    })

    it("CT-12 - Cas obésité modérée", () => {

      imcPage.enterPoids("120.0")
      imcPage.enterTaille("2")

      imcPage.calculate()

      imcPage.verifyImc("30.0")
      imcPage.verifyInterpretation("Obésité modérée")
    })

    it("CT-13 - Cas obésité modérée", () => {

      imcPage.enterPoids("139.6")
      imcPage.enterTaille("2")

      imcPage.calculate()

      imcPage.verifyImc("34.9")
      imcPage.verifyInterpretation("Obésité modérée")
    })

    it("CT-14 - Cas obésité sévère", () => {

      imcPage.enterPoids("140.0")
      imcPage.enterTaille("2")

      imcPage.calculate()

      imcPage.verifyImc("35.0")
      imcPage.verifyInterpretation("Obésité sévère")
    })

    it("CT-15 - Cas obésité sévère", () => {

      imcPage.enterPoids("159.6")
      imcPage.enterTaille("2")

      imcPage.calculate()

      imcPage.verifyImc("39.9")
      imcPage.verifyInterpretation("Obésité sévère")
    })

    it("CT-16 - Cas obésité morbide", () => {

      imcPage.enterPoids("160.0")
      imcPage.enterTaille("2")

      imcPage.calculate()

      imcPage.verifyImc("40.0")
      imcPage.verifyInterpretation("Obésité morbide")
    })
  })

// ====================================
// Cas validation de calculateur IMC
// ====================================

  describe("Cas validations", () => {

    it("CT-17 - Cas taille nulle", () => {

      imcPage.enterPoids("80.0")
      imcPage.enterTaille("0.0")

      imcPage.calculate()

      imcPage.verifyError("La taille doit être supérieure à 0")
    })

    it("CT-18 - Cas poids nul", () => {

      imcPage.enterPoids("0.0")
      imcPage.enterTaille("1.75")

      imcPage.calculate()

      imcPage.verifyError("Le poids doit être supérieur à 0")
    })

    it("CT-19 - Cas taille négative", () => {

      imcPage.enterPoids("80.0")
      imcPage.enterTaille("-1.75")

      imcPage.calculate()

      imcPage.verifyError("La taille doit être supérieure à 0")
    })

    it("CT-20 - Cas poids négatif", () => {
      
      imcPage.enterPoids("-80.0")
      imcPage.enterTaille("1.75")

      imcPage.calculate()

      imcPage.verifyError("Le poids doit être supérieur à 0")
    }) 
    
    it("CT-21 - Cas poids vide", () => {

      imcPage.enterTaille("1.75")

      imcPage.calculate()

      // Le navigateur doit empêcher l'envoi du formulaire
      imcPage.verifyFormValidation()
    })

    it("CT-22 - Cas taille vide", () => {

      imcPage.enterPoids("80.0")

      imcPage.calculate()

      // Le navigateur doit empêcher l'envoi du formulaire
      imcPage.verifyFormValidation()
    })

    it("CT-23 - Cas poids et taille vides", () => {

      imcPage.calculate()

      // Le navigateur doit empêcher l'envoi du formulaire
      imcPage.verifyFormValidation()
    })

  })

})