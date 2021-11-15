/// <reference types="cypress" />


context("Service", () => {

    it("Add Service", () => {
        cy.login("empGrip01", "password")
        AddService()
        // checkservice()
    })
})
// เข้ารายการ บริการ
const AddService = () => {
    cy.get('#nav-item-5').click({ force: true })

    // เพิ่มบริการ
    cy.get('.el-button').click({ force: true })

    // รายละเอียดบริการ
    taxAddService(getRandomAddService(1, 3))
    cy.get('#price').type("150")
    taxAddService1(getRandomAddService(1, 3))

    cy.get('[success=""]').click()

    cy.get('.swal2-confirm').click()

}

// เช็คบริการที่เพิ่มใหม่
const checkservice = () => {
    cy.get('#nav-item-5')
        .click({ force: true })

    cy.get('#servicename').click({ force: true }).type("เพิ่มบริการ")

    cy.get('label').click()
    cy.get('label').click()
    cy.wait(500)

    cy.get('tbody > tr > :nth-child(1)').contains("เพิ่มบริการ")
    cy.get(':nth-child(2) > .btn')
        .click()
}

const getRandomAddService = (min, max) => {
    0, 0
    return Math.random() * (max - min) + min;
}
const taxAddService = (textNo) => {
    cy.get('#state-name')
        .type("เพิ่มบริการ").type(textNo)
}
const taxAddService1 = (textNo) => {
    cy.get('#description')
        .type("เพิ่มบริการ").type(textNo)
}

