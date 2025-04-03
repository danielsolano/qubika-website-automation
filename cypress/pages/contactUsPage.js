class ContactUsPage {

  getForm() {
    return cy.get('form');
  }

  getNameField() {
    return cy.get('input[name="firstname"]');
  }

  getLastNameField() {
    return cy.get('input[name="lastname"]');
  }

  getEmailField() {
    return cy.get('input[name="email"]');
  }

  getCompanyField() {
    return cy.get('input[name="company"]');
  }

  getContactType() {
    return cy.get('select[name="contact_type"]');
  }

  getMessageField() {
    return cy.get('textarea[name="message"]');
  }

  getSubmitButton() {
    return cy.get('.hs-button.primary.large');
  }

  getErrorMessage() {
    return cy.get('.hs-error-msgs');
  }

  submitForm() {
    this.getSubmitButton().click();
  }

  closeForm() {
    cy.get('.icon-x.close-modal').eq(1).click(); // I used index because it seems that there's more elements with the same name and this is the only locator for the 'X'
  }
}

export default ContactUsPage;