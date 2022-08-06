import links from '../fixtures/paginationTestData.json';

describe('crud tests', () => {
  before(() => {
    cy.visit('/');
  });

  it('loads overview', () => {
    cy.get('header').should("be.visible");
  })

  it('allows adding link and returning to overview', () => {
    // add invalid link
    cy.get('#add-link-form input').clear().type("https://www.yossdasdsautube.com");
    cy.get('#add-link-form button').click();
    cy.wait(500);
    cy.contains(/success/i).should("not.exist");

    // add valid link
    cy.get('#add-link-form input').clear().type("https://www.youtube.com");
    cy.get('#add-link-form button').click();
    cy.contains(/success/i).should("be.visible");
    cy.contains(/www.youtube.com/i).should("be.visible");
    cy.contains(/overview/i).click();
    cy.contains(/www.youtube.com/i).should("be.visible");
  })

  it('disallows adding the same link twice', () => {
    // add link the first time
    cy.get('#add-link-form input').type("https://www.youtube.com");
    cy.get('#add-link-form button').click();
    cy.contains(/success/i).should("be.visible");
    cy.contains(/www.youtube.com/i).should("be.visible");
    cy.contains(/overview/i).click();
    cy.contains(/www.youtube.com/i).should("be.visible");
    // attempt to add second link
    cy.get('#add-link-form input').type("https://www.youtube.com");
    cy.get('#add-link-form button').click();
    cy.contains(/success/i).should("not.exist");
  })

  it('allows link edit', () => {
    // add link the first time
    cy.get('#add-link-form input').clear().type("https://www.instagram.com");
    cy.get('#add-link-form button').click();
    cy.contains(/success/i).should("be.visible");
    cy.contains(/www.instagram.com/i).should("be.visible");
    cy.contains(/overview/i).click();
    cy.contains(/www.instagram.com/i).should("be.visible");
    
    // edit first link to invalid url
    cy.get('.bookmark-link button.edit').first().click();
    cy.get('.bookmark-link input.edit').type("yeyeyeyey");
    cy.get('.bookmark-link button.save').click();
    cy.contains(/success/i).should("not.exist");

    // edit first link to valid url
    cy.get('.bookmark-link input.edit').clear().type("www.balraj.cool");
    cy.get('.bookmark-link button.save').click();
    cy.wait(500);
    cy.get('.bookmark-link a').first().should("contain.text", "www.balraj.cool");
  })

  it('allows link deletion', () => {
    // add link the first time
    cy.get('#add-link-form input').clear().type("https://www.whatsapp.com");
    cy.get('#add-link-form button').click();
    cy.contains(/success/i).should("be.visible");
    cy.contains(/www.whatsapp.com/i).should("be.visible");
    cy.contains(/overview/i).click();
    cy.contains(/www.whatsapp.com/i).should("be.visible");

    // removes link on deletion
    cy.get('.bookmark-link .delete').last().click();
    cy.contains(/www.whatsapp.com/i).should("not.exist");
  })
})

describe('pagination tests', () => {
  beforeEach(() => {
    cy.visit('/');
    // add test links
    cy.wrap(links.data).each((link) => {
      // add valid link
      cy.get('#add-link-form input').clear().type(link.url);
      cy.get('#add-link-form button').click();
      cy.contains(/success/i).should("be.visible");
      cy.contains(link.url).should("be.visible");
      cy.contains(/overview/i).click();
    })
  });

  it('shows first page of links only', () => {
    cy.contains(links.data[0].url).should("be.visible");
    cy.contains(links.data[19].url).should("be.visible");
    cy.contains(links.data[20].url).should("not.exist");
  })

  it('shows second page of links', () => {
    cy.get(".page-switcher a").last().click();
    cy.contains(links.data[0].url).should("not.exist");
    cy.contains(links.data[19].url).should("not.exist");
    cy.contains(links.data[20].url).should("be.visible");
  })

})