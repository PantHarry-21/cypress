 <reference types="Cypress" />
 const { faker } = require('@faker-js/faker');
import React from 'react'; // This is now optional

describe('Login & Add a deal', function () {
    // it('Invalid login', function (){
    //     cy.visit("http://moserbus.local/")
    //     cy.get("a[class='ms-btn-lg ms-btn-primary']").click()
    //     console.log('Opened Sign Up page')
    //     cy.wait(2000)
    //     cy.get(".text-link.para-16").click()
    //     console.log('Opened Login page')
    //     cy.wait(2000)
    //     cy.get("input[name='email']").type('himanshupant.qa2@gmail.com')
    //     cy.wait(2000)
    //     cy.get("button[type='submit']").click()
    //     cy.wait(2000)
    //     cy.get('.font-16.text-grey.text-center').should('be.visible')
    //     cy.wait(2000)
    //     console.log("Test passed")
    })
    it('Valid login', function () {
        cy.session('loginSession', () => {
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
        console.log('Logged in Successfully')
        cy.wait(2000)
        cy.get("#main-app > div > div > div > div.bg-simple-pattern.d-flex.h-100.justify-content-between.flex-column > div > div > div > form > div.text-end.mt-4.w-100 > button").click()
        cy.url().should('include', '/dashboard')
        cy.wait(5000)

          // Listen for any uncaught exceptions or errors on the page
        cy.on('uncaught:exception', (err, runnable) => {
        // Log the error
        cy.log('An error occurred:', err.message);
  
        // Optionally, you can fail the test if an error occurs
        throw err;
      });

        cy.get("div.d-flex.main-body div.w-100.main-app div.the-header div.ms-header.position-relative div.d-flex.align-items-center.justify-content-lg-between.justify-content-end.w-100.w-lg-auto.h-100.position-unset.position-lg-relative:nth-child(2) div.d-flex.align-items-center.justify-content-end.pe-3.h-100 div.d-flex.header-icon.h-100.me-0.me-sm-3:nth-child(1) div.global.trigger:nth-child(2) div.toggler div.thumb.tooltip-container > span.ri-function-line.font-24").click()
        cy.wait(2000)
        cy.get("div.global div.cstm-dropdown div.w-100 div.item.quick-add:nth-child(1) div.d-flex.align-items-start.justify-content-center.flex-column.gap-8 div.d-flex.align-items-center div:nth-child(3) > h4.py-1").click()
        cy.wait(2000)

        cy.get("input[placeholder='Enter first name']").type(faker.person.firstName())
        cy.wait(2000)
        cy.get("//input[@placeholder='Enter last name']").type(faker.person.lastName())
        cy.wait("2000")
        cy.get("//input[@placeholder='Enter phone number']").type(faker.phone.number())
        cy.wait("2000")
        cy.get("//input[@placeholder='Enter email']").type(faker.internet.email())
        cy.wait("2000")
        cy.get("//select[@name='stageType']").select("Lead")
        cy.wait("2000")
        cy.get("//select[@name='stageType']").should('have.value', 'Lead');
        cy.get("//button[@type='submit']").click()

        console.log("This test is completed")
        })
    })
// })
