describe("My First Test", () => {
  it("click the link type", () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    cy.url().should("include", "commands/actions");
    cy.get(".action-email")
      .type("fakeEmail@gmail.com")
      .should("have.value", "fakeEmail@gmail.com");
  });
  it("click the link focus ", () => {
    cy.visit("https://example.cypress.io");

    cy.contains("focus").click();
    cy.get(".action-focus").focus().should("have.class", "focus");
  });
});
export {};
