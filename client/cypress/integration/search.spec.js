context("Searching", () => {
  it("Check search field is filtering", () => {
    cy.get("input[type=text]").type("2001");
    cy.contains("2001");
  });

  it("Check search field changing to year filtering", () => {
    cy.contains("year").click();
    cy.get("div").not("2001", "be.visible");
    cy.contains("Along Came").should("be.visible");
  });
});
