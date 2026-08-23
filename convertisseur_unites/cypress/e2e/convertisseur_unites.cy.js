import ConverterPage from "../pages/ConverterPage"

describe('Convertisseur d’unités', () => {

  beforeEach(() => {
    ConverterPage.visit()
  })

// ====================================
// Cas nominaux de conversion d’unités
// ====================================

  describe("Longueur", () => {
 
    it("CT-01 - Convertit 1 km en m", () => {

      ConverterPage.convert(
        "1",
        "length",
        "km",
        "m"
      )

    ConverterPage.verifyResult("1000")

    })

    it("CT-02 - Convertit 1000 m en km", () => {

      ConverterPage.convert(
        "1000",
        "length",
        "m",
        "km"
      )

    ConverterPage.verifyResult("1")

    })

    it("CT-03 - Convertit 100 cm en m", () => {

      ConverterPage.convert(
          "100",
          "length",
          "cm",
          "m"
      )

    ConverterPage.verifyResult("1")

    })

    it("CT-04 - Convertit 10 mm en cm", () => {

      ConverterPage.convert(
          "10",
          "length",
          "mm",
          "cm"
      )

    ConverterPage.verifyResult("1")

    })

    it("CT-05 - Convertit 1 m en cm", () => {

      ConverterPage.convert(
          "1",
          "length",
          "m",
          "cm"
      )

    ConverterPage.verifyResult("100")

    })

    it("CT-06 - Convertit 1 km en cm", () => {

      ConverterPage.convert(
          "1",
          "length",
          "km",
          "cm"
      )

    ConverterPage.verifyResult("100000")

    })

  })

  describe("Poids", () => {
 
    it("CT-11 - Convertit 1 kg en g", () => {

      ConverterPage.convert(
        "1",
        "weight",
        "kg",
        "g"
      )

    ConverterPage.verifyResult("1000")

    })

    it("CT-12 - Convertit 1000 g en kg", () => {

      ConverterPage.convert(
        "1000",
        "weight",
        "g",
        "kg"
      )

    ConverterPage.verifyResult("1")

    })

    it("CT-13 - Convertit 1lb en kg", () => {

      ConverterPage.convert(
        "1",
        "weight",
        "lb",
        "kg"
      )

    ConverterPage.verifyResult("0.4536")

    })

    it("CT-14 - Convertit 500 mg en g", () => {

      ConverterPage.convert(
        "500",
        "weight",
        "mg",
        "g"
      )

    ConverterPage.verifyResult("0.5")
    
    })
  })  

  describe("Température", () => {
 
    it("CT-21 - Convertit 0 C en F", () => {

      ConverterPage.convert(
        "0",
        "temperature",
        "C",
        "F"
      )

    ConverterPage.verifyResult("32")

    })

    it("CT-22 - Convertit 32 F en C", () => {
      
      ConverterPage.convert(
        "32",
        "temperature",
        "F",
        "C"
      )

    ConverterPage.verifyResult("0")

    })

    it("CT-23 - Convertit 100 C en F", () => {

      ConverterPage.convert(
        "100",
        "temperature",
        "C",
        "F"
      )

    ConverterPage.verifyResult("212")

    })

    it("CT-24 - Convertit 273.15 K en C", () => {
      
      ConverterPage.convert(
        "273.15",
        "temperature",
        "K",
        "C"
      )

    ConverterPage.verifyResult("0")

    })

    it("CT-25 - Convertit -40 C en F", () => {
      
      ConverterPage.convert(
        "-40",
        "temperature",
        "C",
        "F"
      )

    ConverterPage.verifyResult("-40")

    })
  })

// ====================================
// Cas limites de conversion d’unités
// ====================================

  describe("Valeur = 0", () => {

    it("CT-31 - Convertit 0 m en km", () => {
      ConverterPage.convert("0", "length", "m", "km")
    ConverterPage.verifyResult("0")

    })

    it("CT-32 - Convertit 0 kg en g", () => {
      ConverterPage.convert("0", "weight", "kg", "g")
    ConverterPage.verifyResult("0")

    })

  })

  describe("Valeur négative", () => {
    it("CT-33 - Convertit -1 m en cm", () => {
      ConverterPage.convert("-1", "length", "m", "cm")
    ConverterPage.verifyResult("-100")
    })

    it("CT-34 - Convertit -5 kg en g", () => {
      ConverterPage.convert("-5", "weight", "kg", "g")
      ConverterPage.verifyResult("-5000")
    })

  })
  
  describe("Très grandes valeurs", () => {
    it("CT-35 - Convertit 1000000 km en m", () => {
      ConverterPage.convert("1000000", "length", "km", "m")
    ConverterPage.verifyResult("1000000000")
    })

    it("CT-36 - Convertit 500000 kg en g", () => {
      ConverterPage.convert("500000", "weight", "kg", "g")
    ConverterPage.verifyResult("500000000")
    })

  })

  describe("Valeur décimale", () => {
    it("CT-37 - Convertit 1.5 km en m", () => {
      ConverterPage.convert("1.5", "length", "km", "m")
    ConverterPage.verifyResult("1500")
    })

    it("CT-38 - Convertit 2.75 kg en g", () => {
      ConverterPage.convert("2.75", "weight", "kg", "g")
    ConverterPage.verifyResult("2750")
    })

    it("CT-39 - Convertit 37.5 C en F", () => {
      ConverterPage.convert("37.5", "temperature", "C", "F")
    ConverterPage.verifyResult("99.5")
    })
  })

  describe("Même unité", () => {
    it("CT-40 - Convertit 1.5 m en m", () => {
      ConverterPage.convert("1.5", "length", "m", "m")
    ConverterPage.verifyResult("1.5")
    })

  })

// ====================================
// Les Validations
// ====================================

  describe("Validations", () => {

    it("CT-41 - Champ valeur vide", () => {

      ConverterPage.selectCategory("length")
      ConverterPage.enterFromUnit("m")
      ConverterPage.enterToUnit("km")

      ConverterPage.clickConvert()

      ConverterPage.result.should("have.text", "")

    })

    it("CT-42 - Unité source vide", () => {

      ConverterPage.enterValue("10")
      ConverterPage.selectCategory("length")
      ConverterPage.enterToUnit("km")

      ConverterPage.clickConvert()

      ConverterPage.result.should("have.text", "")

    })

    it("CT-43 - Unité cible vide", () => {

      ConverterPage.enterValue("10")
      ConverterPage.selectCategory("length")
      ConverterPage.enterFromUnit("m")

      ConverterPage.clickConvert()

      ConverterPage.result.should("have.text", "")

    })

  })
  
})
