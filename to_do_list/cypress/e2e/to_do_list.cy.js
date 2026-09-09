describe("To Do List", () => {

  it("affiche la page", () => {

    cy.visit("http://localhost:8000")

    cy.contains("To-Do List")

  })

})
