/// <reference types="cypress" />

describe('Login', () =>
{
    it('Login with valid user and password', () => 
    {
        cy.visit('/');

        cy.get('[href*=login]')
            .click();


        const user = Cypress.env('user').email;
        const pass = Cypress.env('user').password;
        cy.get('input[type=email]')
            .type(user);
        cy.get('input[type=password]')
            .type(pass);
        cy.get('button[type=button].btn-primary')
            .contains('Sign in')
            .click();

        cy.get('.nav-pills a.nav-link')
            .should('have.length', 2);

        cy.get('.nav-pills a.nav-link')
            .first() //.eq(0)
            .should('contains.text', 'Your Feed');


    });
});