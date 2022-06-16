describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
  })
})

describe('check text', () => {
  it('passes', () => {
    cy.get('p').should('have.text', 'Edit src/App.js and save to reload.');
  })
})