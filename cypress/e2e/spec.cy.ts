// Cypress E2E Test
describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // The new page should contain an h2 with "Iniciar sesión"
    cy.get('h2').contains('Iniciar sesión')
  })
})
