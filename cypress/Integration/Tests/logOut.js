<reference types="Cypress" />
describe('Modify After Login', () => {
  beforeEach(() => {
     // Set the session cookie before running the test
     const sessionId = Cypress.env('session_id');
     if (sessionId) {
       cy.setCookie('session_id', sessionId);
     }
   });
      cy.session('loginSession', () => {
          cy.visit('/dashboard');
        })

it('Log out successfully', function () { 
  cy.get("//body/div[@id='app']/div[1]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/span[1]").click()
  cy.wait(2000)
  cy.get("//div[@class='w-100']//div[1]//div[1]//div[1]//div[3]//p[1]").click()
  cy.wait(2000)
  cy.get("//i[@class='ri-close-line action-btn']").click()
  cy.wait(2000)
  // cy.visit('http://bcci.moserbus.local/dashboard')
  cy.wait(5000)
  cy.get('.d-flex.align-items-center.position-relative.profile-icon').should('be.visible').click()
  cy.wait(5000)
  cy.get('#dropdown-CX6kBqQr3AMJvSo0vN9rbjAITTmsEBoW1723462431027 > div > div.item.d-flex.align-items-center.gap-12.logout').should('be.visible').click()
  cy.wait(2000)
  cy.url().should('include', '/login')
  console.log('Test passed successfully')
})
})