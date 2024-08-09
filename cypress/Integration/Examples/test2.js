 / <reference types="Cypress" />
describe('Harry testing', function () {

    it('First Test case', function () {

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
        cy.url().should('eq', 'http://bcci.moserbus.local/dashboard')
        // cy.get('body.dark:nth-child(2) div.h-100:nth-child(3) div.d-flex.h-100 div.w-100 div.login-bg div.login-bg__section.p-3.p-md-0.d-flex.justify-content-xl-end.position-relative.align-items-center.mr-md-5 div.login-bg__section__right-Dark.login-main.col-xl-7.col-md-9.col-12.p-0.sf-pro__reg.position-relative.keytrans div.form-row.mx-0.w-100.align-items-stretch.login div.col-md-7.vet.login__right-box.px-xl-5.px-3.py-4.d-flex.flex-column.justify-content-center form:nth-child(2) div.form-group.mb-2.auto-fill-Dark:nth-child(3) > input.champ-form__cm-input-Dark.caret-color-white.mb-2').type('j.prasad@championsmortgage.com')
        // // cy.wait('200')
        // cy.get('body.dark:nth-child(2) div.h-100:nth-child(3) div.d-flex.h-100 div.w-100 div.login-bg div.login-bg__section.p-3.p-md-0.d-flex.justify-content-xl-end.position-relative.align-items-center.mr-md-5 div.login-bg__section__right-Dark.login-main.col-xl-7.col-md-9.col-12.p-0.sf-pro__reg.position-relative.keytrans div.form-row.mx-0.w-100.align-items-stretch.login div.col-md-7.vet.login__right-box.px-xl-5.px-3.py-4.d-flex.flex-column.justify-content-center form:nth-child(2) div.form-group:nth-child(4) div.input-group.auto-fill-Dark.mb-1 > input.champ-form__cm-input-Dark.caret-color-white:nth-child(1)').type('Agami2311!')
        // cy.get('#submit').click()
        // cy.wait(2000)
        // cy.url().should('eq', 'https://app.mloflo.com/loan-officer/dashboard')
        // const message = 'Logged in successfully'
        // cy.log(`Message: ${message}`)
        
    })
})