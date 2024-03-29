describe("Login Page Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/login");
    cy.viewport(1440, 800);
  });

  it("Should display an error message on failed login", () => {
    cy.intercept("POST", "/api/login", {
      statusCode: 500,
      body: "Internal Server Error",
    });
    cy.get("input[name='email']").type("usuario@example.com");
    cy.get("input[name='password']").type("Secreto1!");
    cy.get("#send-button").click();
  });

  it("Should display the login page correctly", () => {
    cy.get("form").should("be.visible");
    cy.get("input[name='email']").should("be.visible");
    cy.get("input[name='password']").should("be.visible");
    cy.get("#send-button").should("be.visible");
    cy.get("button:contains('¿No tienes una cuenta? Regístrate')")
      .should("be.visible")
      .click();
    cy.wait(300);
    cy.url().should("eq", "http://localhost:5173/register");
  });

  it("Should have the correct styles for the login form", () => {
    cy.get("form").should("have.css", "background-color", "rgba(0, 0, 0, 0)");
    cy.get("input[name='email']").should(
      "have.css",
      "border",
      "0px none rgb(0, 0, 0)"
    );
    cy.get("input[name='password']").should(
      "have.css",
      "border",
      "0px none rgb(0, 0, 0)"
    );
    cy.get("#send-button").should(
      "have.css",
      "background-color",
      "rgb(146, 206, 4)"
    );
  });

  it("Should fill out the login form and redirect to home", () => {
    cy.get("input[name='email']").type("prueba20240106@example.com");
    cy.get("input[name='password']").type("Secreto1!");
    cy.get("#send-button").click();
    cy.wait(300);
    cy.url().should("eq", "http://localhost:5173/");
    cy.get("button:contains('ÁREA CLIENTES')").click();
    cy.get("#menu-appbar").should("be.visible");
    cy.get("li:contains('PERFIL')").click();
    cy.wait(300);
    cy.url().should("eq", "http://localhost:5173/profile");
    cy.get("button:contains('ÁREA CLIENTES')").click();
    cy.get("li:contains('MIS CLASES')").click();
    cy.wait(300);
    cy.url().should("eq", "http://localhost:5173/activities");
    cy.get("button:contains('ÁREA CLIENTES')").click();
    cy.get("li:contains('MI NUTRICIÓN')").click();
    cy.wait(300);
    cy.url().should("eq", "http://localhost:5173/nutrition");
    cy.get("button:contains('ÁREA CLIENTES')").click();
    cy.get("li:contains('LOGOUT')").click();
    cy.wait(300);
    cy.url().should("eq", "http://localhost:5173/");
  });
});
