/// <reference types="cypress" />

context("supplier getLish part+vat", () => {
    it("purchase_order_part", () => {
        cy.login("empGrip01", "password");
        purchase_order()
        cy.logOut()
    })
    it("supplier_getLish ", () => {
        cy.loginSupplier("atp-member1", "atp16011986")
        // add_store()
        supplier_getLish()
        check_order()
        cy.logOut()
    })
    it("check_finance", () => {
        cy.login("empGrip01", "password");
        check_finance()
    })
})
const purchase_order = () => {
    cy.get('#nav-item-0').click()
    cy.get('#btnMenu-1').click()
    cy.wait(1000)
    cy.get('#selSearchPart').click({ force: true })
    cy.wait(1000)
    cy.get('#selSearchPart').click({ force: true }).type("ก้าม", { force: true })
        .type("{downarrow}{enter}", { force: true })
    cy.get('#selSearchPartPositions').click({ force: true })
    cy.wait(1000)
    cy.get('#selSearchPartPositions').click({ force: true }).type("หลัง", { force: true })
        .type("{downarrow}{enter}", { force: true })

    // เลือกอะไหล่
    cy.get('#btnAddCartById-1749').click({ force: true })
    cy.get('#btnAddCartById-1750').click({ force: true })
    cy.wait(500)

    // เข้าตะกร้าสินค้า
    cy.get('.input-group > #btnTopbar_Icon_Cart > img').click()
    cy.wait(500)

    cy.get('#lebTitleNameSupplier').contains("บริษัท ออโต้แพร์ จำกัด")
    //เช็คสินค้า
    cy.get(':nth-child(2) > .text-left > .td-lists > .td-list-text > :nth-child(1)').contains("ก้ามเบรค หลัง")
    cy.get('.input-numbers > #btnIncrementBy-0-0').click({ force: true })
    cy.get('thead > :nth-child(2) > :nth-child(5)').contains("1,284.00")

    cy.get(':nth-child(3) > .text-left > .td-lists > .td-list-text > :nth-child(1)').contains("ก้ามเบรค หลัง")
    cy.get('thead > :nth-child(3) > :nth-child(5)').contains("930.90")

    cy.get('#txtCommentByIndex-0').click().type("test")

    // +vat 7%
    cy.get('.two > .md-label-form > span').click()
    cy.get('div[style="cursor: pointer;"] > .three').contains("2,070.00")
    cy.get(':nth-child(4) > .three').contains("144.90")
    cy.get('.total-price').contains("2,214.90")

    cy.get(':nth-child(2) > .btn').click()
    cy.get('.swal2-confirm').click()

    // เช็ครายการ
    cy.get(':nth-child(1) > :nth-child(1) > a > .primary-blue').click({ force: true })
    cy.get('.status-border').contains("รอยืนยันรายการ")

    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(4)')
        .contains("ก้ามเบรค หลัง")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(2) > .text-left > :nth-child(4)')
        .contains("ก้ามเบรค หลัง")
    cy.get('#priceTotaltd').contains("2,070.00")
    cy.get(':nth-child(5) > #discountsdatatd').contains("144.90")
    cy.get('#totalNettd').contains("2,214.90")

    cy.get('#backtoindex').click()
}
const supplier_getLish = () => {
    cy.get('#nav-item-0').click()

    //ยืนยันรายการ
    cy.get(':nth-child(1) > :nth-child(1) > a > .primary-blue').click({ force: true })

    // สถานะรอยืนยันรายการ
    cy.get('.status-border').contains("รอยืนยันรายการ")
    cy.wait(1000)
    // เลือกประเภทการชำระ
    // เครดิตเทอม
    cy.get('.col-3 > .el-select > .el-input > .el-input__inner').click({ force: true })
        .wait(1000).type("{downarrow}{enter}", { force: true })

    // กดแก้ไข กรอกรายละเอียด
    cy.get('.my-3 > .btn').click({ force: true })

    cy.get('.d-xl-block > .table > tbody > :nth-child(1) > .text-left > :nth-child(4)').contains("ก้ามเบรค หลัง")
    cy.get(':nth-child(1) > [style="width: 10%;"] > .el-select > .el-input > .el-input__inner')
        .click({ force: true }).type("test", { force: true }).type("{downarrow}{enter}", { force: true })
    cy.get(':nth-child(1) > :nth-child(4) > .md-rows > .from-control').click({ force: true }).type("500")

    cy.get('.d-xl-block > .table > tbody > :nth-child(2) > .text-left > :nth-child(4)').contains("ก้ามเบรค หลัง")
    cy.get(':nth-child(2) > [style="width: 10%;"] > .el-select > .el-input > .el-input__inner')
        .click({ force: true }).type("test", { force: true }).type("{downarrow}{enter}", { force: true })
    cy.get(':nth-child(2) > :nth-child(4) > .md-rows > .from-control').click({ force: true }).type("800")


    cy.get(':nth-child(1) > .text-right').contains("2,070.00")
    cy.get('tfoot > :nth-child(3) > .text-right').contains("144.90")
    cy.get('tfoot > :nth-child(4) > .text-right').contains("2,214.90")

    cy.get('#saveConfirmedit').click()
    cy.get('.swal2-confirm').click()
    cy.wait(500)
    cy.get('.swal2-confirm').click()

    // สถานะรอรับสินค้า
    cy.get('.status-border').contains("รอรับสินค้า")
    cy.get(':nth-child(1) > .text-right').contains("2,070.00")
    cy.get('tfoot > :nth-child(3) > .text-right').contains("144.90")
    cy.get('tfoot > :nth-child(4) > .text-right').contains("2,214.90")

    cy.get('#saveConfirm').click()
    cy.get('.swal2-confirm').click()
    cy.wait(500)
    cy.get('.swal2-confirm').click()
}
// เพิ่มร้านค้า
const add_store = () => {
    cy.get('#nav-item-2').click()
    cy.get('a > .el-button').click()
    taxStore1(getRandomStore(1, 3));
    taxStore2(getRandomStore(1, 3));
    cy.get('[success=""]').click()
    cy.get('.swal2-confirm').click()

}
const getRandomStore = (min, max) => {
    0, 0;
    return Math.random() * (max - min) + min;
};
const taxStore1 = (textNo) => {
    cy.get(':nth-child(1) > #state-name').click({ force: true }).type("test").type(textNo);
};
const taxStore2 = (textNo) => {
    cy.get(':nth-child(2) > #state-name').click({ force: true }).type("test").type(textNo);
};
const check_order = () => {
    cy.get('.status-border').contains("รายการเสร็จสิ้น")
    cy.get('.d-xl-block > .table > tbody > :nth-child(1) > .text-left > :nth-child(4)')
        .contains("ก้ามเบรค หลัง")
    cy.get('tbody > :nth-child(1) > :nth-child(8)').contains("ยืนยันการส่ง")
    cy.get('.d-xl-block > .table > tbody > :nth-child(2) > .text-left > :nth-child(4)')
        .contains("ก้ามเบรค หลัง")
    cy.get('tbody > :nth-child(2) > :nth-child(8)').contains("ยืนยันการส่ง")

    cy.get(':nth-child(1) > .text-right').contains("2,070.00")
    cy.get('tfoot > :nth-child(3) > .text-right').contains("144.90")
    cy.get('tfoot > :nth-child(4) > .text-right').contains("2,214.90")

    cy.get('#backtoindex').click()
}
const check_finance = () => {
    cy.get('#nav-item-6').click()
    cy.get('#btnShowBy-0 > img').click()
    cy.wait(1000)

    cy.get('#txtSelectMonth').click().type("กุมภาพัน").type("{downarrow}{enter}", { force: true })
    cy.wait(1000)

    cy.get('.the-contents > .mt-5 > .table > tbody > :nth-child(1) > :nth-child(1)').should("contain.text", "POATP")
    cy.get('tbody > :nth-child(1) > :nth-child(4)').contains("2,214.90")
}