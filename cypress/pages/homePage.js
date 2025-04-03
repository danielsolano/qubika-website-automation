class HomePage {
  
  qubikaURL = 'https://www.qubika.com';

  visit(url) {
    cy.visit(url);
  }

  getLogo() {
    return cy.get('.logo');
  }

  getContactUsButton() {
    return cy.get('#contact-us-button');
  }

  navigateToQubika() {
    this.visit(this.qubikaURL);
  }

  clickContactUsButton() {
    this.getContactUsButton().click();
  }
}

export default HomePage;
