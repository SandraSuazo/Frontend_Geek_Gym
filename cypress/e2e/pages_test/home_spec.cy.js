describe("Home Page Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should load the elements from the first box", () => {
    cy.get("img[alt='Row of people doing spinning']").should("be.visible");
    cy.contains("¿POR QUÉ GEEK GYM?").should("be.visible");
    cy.get(".first-text").should("be.visible");
  });

  it("should load the elements from the second box", () => {
    cy.contains("Quiénes somos...").should("be.visible");
    cy.get(".second-text").should("be.visible");
  });

  it("should load the elements from the third box", () => {
    cy.get("img[alt='Two people shaking hands']").should("be.visible");
    cy.contains("Lo que nos hace únicos y diferentes").should("be.visible");
    cy.get(".third-text").should("be.visible");
    cy.contains("Un ambiente increíble y familiar").should("be.visible");
    cy.contains("Un estilo de vida saludable").should("be.visible");
    cy.contains("Un equipo motivado a tu disposición").should("be.visible");
    cy.contains("Y miles de experiencias únicas").should("be.visible");
  });
});
