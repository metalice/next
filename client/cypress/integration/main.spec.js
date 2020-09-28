context("Elements rendering in main screen", () => {
  it("Check title is present", () => {
    cy.visit("/");
    cy.get("#main-title").should("be.visible");
  });

  it("Check search field is present", () => {
    cy.get("input[type=text]").should("be.visible");
  });

  it("Check 3 checkbox are present", () => {
    cy.get("div").contains("year").should("be.visible");
    cy.get("div").contains("description").should("be.visible");
    cy.get("div").contains("title").should("be.visible");
  });
});
