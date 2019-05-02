describe('Basic flow', () => {
  it('fills the form and clicks on button', () => {
    cy.visit('/')
    cy.get('input[type="text"]').type(Cypress.env('GITHUB_USER'))
    cy.get('button').click()
    cy.contains(Cypress.env('LANGUAGE'))
  })
})
