describe('Log in', () => {

    // beforeEach(() => {
      // Login before each test
        // cy.visit("http://moserbus.local/")
        // cy.get("a[class='ms-btn-lg ms-btn-primary']").click()
        // console.log('Opened Sign Up page')
        // cy.wait(2000)
        // cy.get(".text-link.para-16").click()
        // console.log('Opened Login page')
        // cy.wait(2000)
        // cy.get("input[name='email']").type('himanshupant.qa@gmail.com')
        // cy.wait(2000)
        // cy.get("button[type='submit']").click()
        // cy.wait(2000)
        // cy.get("input[placeholder='Enter Your Password']").type('Harry@123')
        // console.log('Logged in Successfully')
        // cy.wait(2000)
        // cy.get("#main-app > div > div > div > div.bg-simple-pattern.d-flex.h-100.justify-content-between.flex-column > div > div > div > form > div.text-end.mt-4.w-100 > button").click()
        // cy.url().should('eq', 'http://bcci.moserbus.local/dashboard')
    })
  
    it('should display the Dashboard text on home page', () => {
      cy.get('#main-app > div.page-wrapper > div > div > div.content-head.bg-main > div > div.left > h4').should('contain', 'Dashboard')
      cy.wait(5000)

      it('should log out successfully', () => {
        cy.visit('http://bcci.moserbus.local/dashboard')
        cy.wait(5000)
        cy.get('.d-flex.align-items-center.position-relative.profile-icon').should('be.visible').click()
        cy.wait(5000)
        cy.get('#dropdown-CX6kBqQr3AMJvSo0vN9rbjAITTmsEBoW1723462431027 > div > div.item.d-flex.align-items-center.gap-12.logout').should('be.visible').click()
        cy.wait(2000)
        cy.url().should('include', '/login')
        console.log('Test passed successfully')
      })
    
    })
  