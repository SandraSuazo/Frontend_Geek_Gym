describe("NavBar Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
    cy.viewport(1440, 800);
  });

  it("Should navigate to the home page when clicking the logo", () => {
    cy.get("img[alt='Logo']")
      .first()
      .should("be.visible")
      .trigger("mouseover")
      .should("have.css", "cursor", "pointer")
      .click();
    cy.wait(300);
    cy.url().should("eq", "http://localhost:5173/");
  });

  it("Should display the 'INICIO' button with correct styles", () => {
    cy.get("button:contains('INICIO')")
      .should("be.visible")
      .should("have.css", "color", "rgb(255, 255, 255)")
      .should("have.css", "backgroundColor", "rgba(0, 0, 0, 0)")
      .trigger("mouseover")
      .should("have.css", "cursor", "pointer")
      .click();
    cy.wait(300);
    cy.url().should("eq", "http://localhost:5173/");
  });

  it("Should display the 'CONÓCENOS' button with correct styles", () => {
    cy.get("button:contains('CONÓCENOS')")
      .should("be.visible")
      .should("have.css", "color", "rgb(255, 255, 255)")
      .should("have.css", "backgroundColor", "rgba(0, 0, 0, 0)")
      .trigger("mouseover")
      .should("have.css", "cursor", "pointer")
      .click();
    cy.wait(300);
    cy.url().should("eq", "http://localhost:5173/about");
  });

  it("Should display the 'ACTIVIDADES' button with correct styles", () => {
    cy.get("button:contains('ACTIVIDADES')")
      .should("be.visible")
      .should("have.css", "color", "rgb(255, 255, 255)")
      .should("have.css", "backgroundColor", "rgba(0, 0, 0, 0)")
      .trigger("mouseover")
      .should("have.css", "cursor", "pointer")
      .click();
    cy.wait(300);
    cy.url().should("eq", "http://localhost:5173/about/activities");
  });

  it("Should display the 'NUTRICIÓN' button with correct styles", () => {
    cy.get("button:contains('NUTRICIÓN')")
      .should("be.visible")
      .should("have.css", "color", "rgb(255, 255, 255)")
      .should("have.css", "backgroundColor", "rgba(0, 0, 0, 0)")
      .trigger("mouseover")
      .should("have.css", "cursor", "pointer")
      .click();
    cy.wait(300);
    cy.url().should("eq", "http://localhost:5173/about/nutrition");
  });

  it("Should display the 'ÁREA CLIENTES' button with correct styles", () => {
    cy.get("button:contains('ÁREA CLIENTES')")
      .should("be.visible")
      .should("have.css", "color", "rgba(0, 0, 0, 0.87)")
      .should("have.css", "backgroundColor", "rgb(146, 206, 4)")
      .trigger("mouseover")
      .should("have.css", "cursor", "pointer");
  });

  it("Should display the 'menu-appbar' button with correct styles", () => {
    cy.get("button:contains('ÁREA CLIENTES')").click();
    cy.get("#menu-appbar")
      .should("be.visible")
      .should("have.css", "background-color", "rgba(0, 0, 0, 0)")
      .should("have.css", "color", "rgb(0, 0, 0)")
      .should("have.css", "border", "0px none rgb(0, 0, 0)");
    cy.get("li:contains('LOGIN')").click();
    cy.wait(300);
    cy.url().should("eq", "http://localhost:5173/login");
  });
});
