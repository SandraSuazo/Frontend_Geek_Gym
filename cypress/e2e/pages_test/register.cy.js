describe("Register Page Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/register");
    cy.viewport(1440, 800);
  });

  it("Should display an error message on failed registration", () => {
    cy.intercept("POST", "/api/register", {
      statusCode: 500,
      body: "Internal Server Error",
    });
    cy.get("input[name='name']").type("Usuario Prueba");
    cy.get("input[name='email']").type("usuario.prueba@example.com");
    cy.get("input[name='password']").type("123");
    cy.get("#send-button").click();
  });

  it("Should display the registration page correctly", () => {
    cy.get("form").should("be.visible");
    cy.get("input[name='name']").should("be.visible");
    cy.get("input[name='email']").should("be.visible");
    cy.get("input[name='password']").should("be.visible");
    cy.get("#send-button").should("be.visible");
    cy.get("button:contains('¿Ya tienes una cuenta? Inicia sesión')")
      .should("be.visible")
      .click();
    cy.wait(300);
    cy.url().should("eq", "http://localhost:5173/login");
  });

  it("Should have the correct styles for the registration form", () => {
    cy.get("form").should("have.css", "background-color", "rgba(0, 0, 0, 0)");
    cy.get("input[name='name']").should(
      "have.css",
      "border",
      "0px none rgb(0, 0, 0)"
    );
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

  it("Should fill out the registration form and navigate to home", () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    const formattedDate = currentDate
      .toISOString()
      .slice(0, 10)
      .replace(/-/g, "");
    const uniqueEmail = `prueba${formattedDate}@example.com`;
    const uniqueName = `User ${formattedDate}`;
    cy.get("input[name='name']").type(uniqueName);
    cy.get("input[name='email']").type(uniqueEmail);
    cy.get("input[name='password']").type("Secreto1!");
    cy.get("#send-button").click();
    cy.wait(300);
    cy.url().should("eq", "http://localhost:5173");
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
    cy.url().should("eq", "http://localhost:5173");
  });
});
