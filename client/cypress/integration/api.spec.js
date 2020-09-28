import movie from "../fixtures/movies.json";
context("Network Request is made", () => {
  it("Check main window call /movies", () => {
    cy.server();
    cy.route("/movies", "fixture:movies.json").as("getMovies");
    cy.visit("/");
    cy.wait("@getMovies");
    cy.contains("2001").should("be.visible");
  });
    
  it("Check movie details page call /movies/:id", () => {
    cy.server();
    cy.route(`/movies/${movie[0].id}`, "fixture:movies.json").as("getMovieDetail");
    cy.visit(`/${movie[0].id}`);
    cy.wait("@getMovieDetail");
    cy.contains("2001").should("be.visible");
  });
});
