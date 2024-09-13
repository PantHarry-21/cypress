/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');

describe('Login and Add event', () => {
     before(() => {
          cy.visit("http://moserbus.local/")
     cy.get("a[class='ms-btn-lg ms-btn-primary']").click()
     console.log('Opened Sign Up page')
     cy.wait(2000)
     cy.get(".text-link.para-16").click()
     console.log('Opened Login page')
     cy.wait(3000)
     cy.get("input[name='email']").type('himanshupant.qa@gmail.com')
     cy.wait(2000)
     cy.get("button[type='submit']").click()
     cy.wait(3000)
     cy.get("input[placeholder='Enter Your Password']").type('Harry@123')
     cy.wait(2000)
     cy.get("button[type='submit']").click()
     cy.wait(5000)
     })
  
    it('will add an event', function () {
      cy.get('[href="/calendar"]').click();
      cy.wait(2000);
      cy.url().should('include', '/calendar');
      cy.wait(2000);
      cy.get('.left > .ms-btn-primary').click();
      cy.wait(2000);
      cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > .cstm-input').type('Automated event')
      cy.wait(2000);
      cy.get(':nth-child(1) > .form-field-wrapper > .d-flex > #flat-picker-component-id').clear().type('14:30')
      cy.wait(2000);
      cy.get(':nth-child(4) > :nth-child(2) > .form-field-wrapper > .d-flex > #flat-picker-component-id').type('16:30')
      cy.wait(2000);
      cy.get(':nth-child(4) > .box').click()
      cy.wait(2000);
      cy.get('.se-wrapper-wysiwyg').type(faker.lorem.paragraph());
      cy.wait(2000);
      cy.get('.side-modal-footer > .ms-btn-primary').click()
      console.log("Event added successfully")
    });
  });
  