import HomePage from '../pages/homePage';
import ContactUsPage from '../pages/contactUsPage';

describe('Contact Form Test', () => {
  const homePage = new HomePage();
  const contactUsPage = new ContactUsPage();
  const expectedErrorMessage = 'Please complete this required field.';

  it('Contact Form validation', () => {
    cy.viewport(2000, 1000);

    // Step 1: Navigate to Qubika Website
    homePage.navigateToQubika();

    // Step 2: Validate that the website is displayed correctly, validating URL and Qubika logo
    cy.url().should('eq', 'https://qubika.com/');
    homePage.getLogo().should('be.visible');

    // Step 3: Click ‘Contact us’ button
    homePage.clickContactUsButton();

    // Step 4: Validate contact form is displayed
    cy.get('form').should('be.visible');
    // 4.1 Validating Name field is displayed
    contactUsPage.getNameField().should('be.visible');
    // 4.2 Email field is displayed
    contactUsPage.getEmailField().should('be.visible');
    // 4.3 ‘Submit’ button is displayed
    contactUsPage.getSubmitButton().should('be.visible');

    // Step 5: Click ‘Submit’ button without filling any field
    cy.get(contactUsPage.getSubmitButton().scrollIntoView());
    contactUsPage.submitForm();

    // Step 6: Validate that all mandatory fields have an error message
    contactUsPage.getNameField().closest('.hs_firstname').find('.hs-error-msg.hs-main-font-element').should('contain.text', 'Please complete this required field.');
    contactUsPage.getLastNameField().closest('.hs_lastname').find('.hs-error-msg.hs-main-font-element').should('contain.text', 'Please complete this required field.');
    contactUsPage.getEmailField().closest('.hs_email').find('.hs-error-msg.hs-main-font-element').should('contain.text', 'Please complete this required field.');
    contactUsPage.getCompanyField().closest('.hs_company').find('.hs-error-msg.hs-main-font-element').should('contain.text', 'Please complete this required field.');
    contactUsPage.getContactType().closest('.hs_contact_type').find('.hs-error-msg.hs-main-font-element').should('contain.text', 'Please complete this required field.');
    contactUsPage.getMessageField().closest('.hs_message').find('.hs-error-msg.hs-main-font-element').should('contain.text', 'Please complete this required field.');

    // Step 7: Write ‘Test name’ on the ‘Name’ field
    contactUsPage.getNameField().type('Test name');

    // Step 8: Validate that all mandatory fields have an error message except ‘Name’ field
    contactUsPage.getNameField().closest('.hs_firstname').find('.hs-error-msg.hs-main-font-element').should('not.exist');
    contactUsPage.getLastNameField().closest('.hs_lastname').find('.hs-error-msg.hs-main-font-element').should('contain.text', 'Please complete this required field.');
    contactUsPage.getEmailField().closest('.hs_email').find('.hs-error-msg.hs-main-font-element').should('contain.text', 'Please complete this required field.');
    contactUsPage.getCompanyField().closest('.hs_company').find('.hs-error-msg.hs-main-font-element').should('contain.text', 'Please complete this required field.');
    contactUsPage.getContactType().closest('.hs_contact_type').find('.hs-error-msg.hs-main-font-element').should('contain.text', 'Please complete this required field.');
    contactUsPage.getMessageField().closest('.hs_message').find('.hs-error-msg.hs-main-font-element').should('contain.text', 'Please complete this required field.');

    // Step 9: Close ‘Contact us’ form
    contactUsPage.closeForm();

    // Step 10: Validate that the form is not displayed
    contactUsPage.getForm().should('not.be.visible');

    // Step 11: Open ‘Contact us’ form
    homePage.getContactUsButton().click();

    // Step 12: Validate that the form is displayed with the preview state: Name field completed and the rest with an error message
    contactUsPage.getNameField().should('have.value', 'Test name');
    contactUsPage.getLastNameField().closest('.hs_lastname').find('.hs-error-msg.hs-main-font-element').should('contain.text', 'Please complete this required field.');
    contactUsPage.getEmailField().closest('.hs_email').find('.hs-error-msg.hs-main-font-element').should('contain.text', 'Please complete this required field.');
    contactUsPage.getCompanyField().closest('.hs_company').find('.hs-error-msg.hs-main-font-element').should('contain.text', 'Please complete this required field.');
    contactUsPage.getContactType().closest('.hs_contact_type').find('.hs-error-msg.hs-main-font-element').should('contain.text', 'Please complete this required field.');
    contactUsPage.getMessageField().closest('.hs_message').find('.hs-error-msg.hs-main-font-element').should('contain.text', 'Please complete this required field.');
  });
});