context("Elements rending in details screen", () => {
  it("Check for clicking on a movie redirect to a details page", () => {
    cy.contains("2001").click();
    cy.url().should("eq", "http://localhost:3001/207856");
  });

  it("Check if back button is working", () => {
    cy.contains("Back to all").click();
    cy.url().should("eq", "http://localhost:3001/");
  });
    
  it("Check if going to a non exist movie", () => {
    cy.visit("/some/bad/route");
    cy.contains("Cannot find movie").should("be.visible");
  });
});
