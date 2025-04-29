describe('Signup and Login Flow', () => {
  it('allows a user to sign up and log in', () => {
    cy.visit('/signup');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard');
    cy.contains('Welcome, test@example.com');

    cy.get('button[aria-label="Logout"]').click();
    cy.url().should('include', '/login');
  });
});