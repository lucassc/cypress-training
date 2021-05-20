
describe('Articles', () => {

    it('Create new article', function () {

        cy.loginConduit();

        cy.visit('https://purescript-react-realworld.netlify.app/');

        const title = 'Title Lucas 2';
        cy.get('a[href$=editor]').click();
        cy.get('input[placeholder="Article title"]').type(title);
        cy.get('input[placeholder="What is this article about?"]').type('About Lucas');
        cy.get('form textarea').type('article content');
        cy.get('input[placeholder="Enter tags"]').type('lucas article');
        cy.get('button[type=button].btn').contains('Publish article').click();
        cy.get('h1').should('have.text', title);
    });
});