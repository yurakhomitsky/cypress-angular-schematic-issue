describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.login();
    cy.contains('app is running!')
  })
})
