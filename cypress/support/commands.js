// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (username, password) => {
    cy.visit("https://demo.admin.trade.autopair.co/")
    cy.get('form > .col-sm-12 > :nth-child(1) > label').should("contain.text", "ชื่อผู้ใช้งาน")
    cy.get('#input_username').type(username)
    cy.get('form > .col-sm-12 > :nth-child(2) > label').should("contain.text", "รหัสผ่าน")
    cy.get('#input_password').type(password)
    cy.get('.btn').click()
})

Cypress.Commands.add("logins", (username, password) => {
    cy.visit("https://demo.admin.trade.autopair.co/")
    cy.get('form > .col-sm-12 > :nth-child(1) > label').should("contain.text", "ชื่อผู้ใช้งาน")
    cy.get('#input_username').type(username)
    cy.get('form > .col-sm-12 > :nth-child(2) > label').should("contain.text", "รหัสผ่าน")
    cy.get('#input_password').type(password)
    cy.get('.btn').click()

})
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })