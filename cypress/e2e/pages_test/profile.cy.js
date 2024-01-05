describe("Profile Page Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/login");
    cy.viewport(1440, 800);
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
    cy.viewport(1440, 800);
  });

  it("Should display the profile page correctly", () => {
    cy.get("form").should("be.visible");
    cy.get("input[name='name']").should("have.value", "User 20240106");
    cy.get("input[name='phone']").should("have.value", "");
    cy.get("input[name='adress']").should("have.value", "");
    cy.get("input[name='email']").should(
      "have.value",
      "prueba20240106@example.com"
    );
    cy.get("button:contains('Modificar Perfil')").should("be.visible");
  });

  it("Should switch to edit mode when clicking 'Modificar Perfil' button", () => {
    cy.get("button:contains('Modificar Perfil')").click();
    cy.get("input[name='name']").should("not.be.disabled");
    cy.get("input[name='phone']").should("not.be.disabled");
    cy.get("input[name='adress']").should("not.be.disabled");
    cy.get("input[name='email']").should("not.be.disabled");
    cy.get("button:contains('Guardar Cambios')").should("be.visible").click();
  });
});
