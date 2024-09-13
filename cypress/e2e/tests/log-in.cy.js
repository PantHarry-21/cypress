/// <reference types="cypress" />

describe('Login and Navigation Tests', () => {
    
    // Test case for Login with valid creds
    it('Login with valid creds', () => {
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
        cy.wait(2000)
        cy.url().should('include', '/dashboard')
        cy.wait(2000)
        console.log("Test passed")
    })
})
  