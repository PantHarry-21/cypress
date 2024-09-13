/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');

describe('Login and Navigation Tests', () => {
     before(() => {
          cy.visit("http://moserbus.local/")
     cy.get("a[class='ms-btn-lg ms-btn-primary']").click()
     console.log('Opened Sign Up page')
     cy.wait(2000)
     cy.get(".text-link.para-16").click()
     console.log('Opened Login page')
     cy.wait(2000)
     cy.get("input[name='email']").type('himanshupant.qa@gmail.com')
     cy.wait(2000)
     cy.get("button[type='submit']").click()
     cy.wait(2000)
     cy.get("input[placeholder='Enter Your Password']").type('Harry@123')
     cy.wait(2000)
     cy.get("button[type='submit']").click()
     cy.wait(5000)
     })
     //  Test case for adding a deal
     it('Add deal from header', () => {
     cy.url().should('include', '/dashboard')
     cy.wait(2000)
     cy.get('.ri-function-line').click()
     cy.wait(2000)
     cy.get(':nth-child(1) > .align-items-start > .d-flex').click()
     cy.wait(2000)
     cy.get(':nth-child(1) > .form-field-wrapper > .cstm-input').select('lead');
     cy.wait(2000)
     cy.get('.side-modal-body > :nth-child(1) > :nth-child(2) > .form-field-wrapper > .cstm-input').select('New');
     cy.wait(2000)
     cy.get(':nth-child(3) > .form-field-wrapper > .cstm-input').select('Self Generated');
     cy.wait(2000)
     const firstName = (faker.person.firstName())
     cy.get("input[placeholder='Enter first name']").type(firstName)
     cy.wait(2000)
     const lastName = (faker.person.lastName())
     cy.get("input[placeholder='Enter last name']").type(lastName)
     cy.wait(2000)
     const phoneNumber = (faker.phone.number())
     cy.get("input[placeholder='Enter phone number']").type(phoneNumber)
     cy.wait(2000)
     const emailAddress = (faker.internet.email())
     cy.get("input[placeholder='Enter email']").type(emailAddress)
     cy.wait(2000)
     cy.get('.side-modal-footer > .ms-btn-primary').click() 
     // cy.wait(2000)
     cy.get('.column > span').then(($toasty) => {
          if ($toasty.hasClass('.toast.success')) {
               console.log('Success toasty detected')
               expect($toasty).to.contain('Borrower added successfully.')
             } else if ($toasty.hasClass('.toast.error')) {
               console.log('Error toasty detected')
               expect($toasty).to.contain('Internal server error')
             } else if ($toasty.hasClass('.toast.info')) {
               console.log('Info toasty detected')
               expect($toasty).to.contain('Internal server error.')
             } else {
               console.log('Unknown toasty type')
             }
     // const messageToasty = ("//span[normalize-space()='Internal server error..']")
     // cy.get(messageToasty).should('be.visible').and('contain', 'Internal server error..')
     console.log('User being added:', firstName)
})
})
})