describe("login page", () => {
  it("check login btn that is in home page", () => {
    cy.visit("/");

    cy.get('[data-test-id="login-navigate"]').click();
    cy.url().should("include", "login");
    cy.login("kasra", "kasra123");
    cy.url().should("include", "profile");
    cy.get('[data-test-id="header"]').should(
      "have.text",
      "welcome to your profile",
    );
  });

  it("check if a user don't enter password", () => {
    cy.visit("/login");
    cy.login("amir", "");
    cy.get('[data-test-id="password"]').should("have.value", "");
  });

  it("check if user is ban or not", () => {
    cy.visit("/login");
    cy.login("amir", "12345678");

    cy.spy(console, "log").calledWith("submit form err, status code: 401");
  });

  it("check for disabling btn", () => {
    cy.visit("/login");

    cy.get('button[type="submit"]').should("be.disabled");

    cy.get('input[name="user_name"]').type("kasra");
    cy.get('input[name="password"]').type("kasra");

    cy.get('button[type="submit"]').should("be.disabled");
    cy.get('input[name="password"]').type("kasra123");

    cy.get('button[type="submit"]').should("not.be.disabled");
  });

  it("check sign up btn", () => {
    cy.visit("/login");

    cy.get('a[href*="/sign-up"]').click();
    cy.url().should("include", "sign-up");
  });
});
export {};
