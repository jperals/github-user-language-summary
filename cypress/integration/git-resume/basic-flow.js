describe('Basic flow', () => {
  it('fill the form and clicks on button', () => {
    cy.visit('/')
    cy.get('input[type="text"]').type(Cypress.env('GITHUB_USER'))
    cy.get('button').click()
    cy.contains(Cypress.env('LANGUAGE'))
  })
  it('fill the form and press enter', () => {
    cy.visit('/')
    cy.get('input[type="text"]').type(Cypress.env('GITHUB_USER') + '{enter}')
    cy.contains(Cypress.env('LANGUAGE'))
  })
})
