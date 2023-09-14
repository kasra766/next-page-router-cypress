describe("testing sign up page", () => {
  beforeEach(() => {
    cy.visit("/sign-up");
  });
  it("test for title", () => {
    cy.get(`[data-testid="title"]`).should("have.text", "Sign Up");
  });

  it("checking button that disable or not", () => {
    cy.get('input[name="fname"]').type("kasra");
    cy.get('input[name="lname"]').type("mohammadpour");

    cy.get('input[name="phone"]').type("09189202822");

    cy.get('button[type="submit"]').should("be.disabled");
  });

  it("checking when all fields are fill but with wrong value ", () => {
    cy.get('input[name="fname"]').type("kasra");
    cy.get('input[name="lname"]').type("mohammadpour");

    // wrong value
    cy.get('input[name="phone"]').type("91892028");

    cy.get('input[name="user_name"]').type("kasra");
    //wrong value
    cy.get('input[name="email"]').type("kasra.com");

    //wrong value
    cy.get('input[name="password"]').type("kasra");

    cy.get('button[type="submit"]').should("be.disabled");

    cy.url().should("include", "sign-up");
  });

  it("submit form with valid values", () => {
    cy.get('input[name="fname"]').type("kasra");
    cy.get('input[name="lname"]').type("mohammadpour");
    cy.get('input[name="phone"]').type("9189202822");
    cy.get('input[name="user_name"]').type("kasra");
    cy.get('input[name="email"]').type("kasra@yahoo.com");
    cy.get('input[name="password"]').type("kasraK@1{enter}");

    cy.get('button[type="submit"]').should("not.be.disabled");

    cy.url().should("include", "sign-up");
    cy.url().should("include", "profile");
  });

  it("submit form and check user if is ban or not", () => {
    cy.get('input[name="fname"]').type("amir");
    cy.get('input[name="lname"]').type("mohammadpour");
    cy.get('input[name="phone"]').type("9189202822");
    cy.get('input[name="user_name"]').type("amir");
    cy.get('input[name="email"]').type("kasra@yahoo.com");
    cy.get('input[name="password"]').type("kasraK@1{enter}");

    cy.get('button[type="submit"]').should("not.be.disabled");

    cy.url().should("include", "sign-up");

    cy.url().should("not.include", "profile");
  });
});
