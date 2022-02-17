/// <reference types="cypress" />

context("job_groupA", () => {
    it("job_groupA", () => {
        cy.pause()
        cy.login("nunu", "1234");

        job_groupA()
        start_job()
    })
})
const job_groupA = () => {
    cy.get('#nav-item-2').click()
    cy.get('#btn-addRepairJob').click({ force: true })

    cy.get('#selSelectCar').click({ force: true }).type("9กณ", { force: true }).type("{downarrow}{enter}");
    cy.get('#selSelectmechanicId').click({ force: true }).type("{downarrow}{enter}", { force: true });

    cy.get('.col-xl-3 > .btn').click({ force: true })
    cy.wait(500)
    // ยาง
    cy.get('#trTireCatalog0 > .text-left').contains("ยางกลุ่มราคา")
    cy.get('#trTireCatalog0 > :nth-child(4)').contains("200")
    cy.get('#dotM-12786').click()
    cy.get('.el-icon-plus').click()
    cy.get('.btn-primary').click()


    // อะไหล่
    cy.wait(500)
    cy.get('#tab-PART').click()
    cy.get('#pane-PART > .d-xl-block > .table > tbody > tr > .text-left').contains("อะไหล่กลุ่มราคา")
    cy.get('#pane-PART > .d-xl-block > .table > tbody > tr > :nth-child(5)').contains("200")
    cy.get('#addSpare-12787').click()

    // แม็ก
    cy.wait(500)
    cy.get('#tab-MAG').click()
    cy.get('#pane-MAG > .d-xl-block > .table > tbody > tr > .text-left').contains("แม็กกลุ่มราคา")
    cy.get('#pane-MAG > .d-xl-block > .table > tbody > tr > :nth-child(4)').contains("200")
    cy.get('#addMagPo-12789').click()

    // ของเหลว
    cy.wait(500)
    cy.get('#tab-LIQUID').click()
    cy.get('#pane-LIQUID > .d-xl-block > .table > tbody > tr > .text-left').contains("ของเหลวกลุ่มราคา")
    cy.get('#pane-LIQUID > .d-xl-block > .table > tbody > tr > :nth-child(5)').contains("200")
    cy.get('#addLiquidPo-12788').click()

    cy.get('#Product > .modal-dialog > .modal-content > .modal-header > .close').click()

    // เช็ครายการสินค้า
    cy.get('#tiredata-0').contains("ยางกลุ่มราคา")
    cy.get('#totalpricetireenduser-0').contains("200")

    cy.get('#datapart-0').contains("อะไหล่กลุ่มราคา")
    cy.get('#part-0 > #partproductlatestSalePricetotal-0').contains("200")

    cy.get('#dataliquid-0').contains("ของเหลวกลุ่มราคา")
    cy.get('#li-0 > #partproductlatestSalePricetotal-0').contains("200")
    cy.get('#li-0 > :nth-child(6) > .row > .mt-3 > .form-control')
        .click({ force: true }).clear({ force: true }).type("10", { force: true })

    cy.get('#magdata-0').contains("แม็กกลุ่มราคา")
    cy.get('#mag-0 > #partproductlatestSalePricetotal-0').contains("200")
    cy.get('#mag-0 > :nth-child(6) > .row > .mt-3 > .form-control')
        .click({ force: true }).clear({ force: true }).type("10", { force: true })

    // เช็คคำนวณ
    cy.get('#afterDiscount').contains("760.00")
    cy.get('#vatPrice').contains("53.20")
    cy.get('#paymentPrice').contains("813.20")

    // เปิดงานซ่อม
    cy.get('#btncreateWalkInWorkshopJob').click()
    cy.get('.swal2-confirm').click()

    // เช็ครายการงานซ่อม
    cy.get('#jobrepair-0 > :nth-child(2)').should("contain.text", "ลูกค้ากลุ่มราคา")
    cy.get('#jobrepair-0 > :nth-child(6)').should("contain.text", "813.20")
    cy.get('[style="width: 12rem;"] > .status-border').should("contain.text", "รอซ่อมบำรุง")
}
const start_job = () => {
    cy.wait(5000)
    cy.visit("https://herodemo.autopair.co/workshop/jobs/ATH-00265-0222-0006")
    cy.wait(5000)

    // รอซ่อมบำรุง
    cy.get('.status-border').contains("รอซ่อมบำรุง")
    // ยาง
    cy.get('#podata-0').contains("ยางกลุ่มราคา")
    cy.get('#po-0 > :nth-child(6)').contains("200")

    // อะไหล่
    cy.get('#podata-1').contains("อะไหล่กลุ่มราคา")
    cy.get('#totalpoprice-1').contains("200")

    // แม็ก
    cy.get('#podata-2').contains("แม็กกลุ่มราคา")
    cy.get('#totalpoprice-2').contains("180")

    // ของเหลว
    cy.get('#podata-3').contains("ของเหลวกลุ่มราคา")
    cy.get('#totalpoprice-3').contains("180")

    // เช็คคำนวณ
    cy.get('#afterDiscount').contains("760.00")
    cy.get('#vatPrice').contains("53.20")
    cy.get('#paymentPrice').contains("813.20")

    cy.get('#btnrecheckConfirmstart').click()
    cy.get('.swal2-confirm').click()
    cy.wait(500)
    cy.get('.swal2-confirm').click()

    // กำลังซ่อมบำรุง
    cy.get('.status-border').contains("กำลังซ่อมบำรุง")
    // ยาง
    cy.get('#podata-0').contains("ยางกลุ่มราคา")
    cy.get('#po-0 > :nth-child(6)').contains("200")

    // อะไหล่
    cy.get('#podata-1').contains("อะไหล่กลุ่มราคา")
    cy.get('#totalpoprice-1').contains("200")

    // แม็ก
    cy.get('#podata-2').contains("แม็กกลุ่มราคา")
    cy.get('#totalpoprice-2').contains("180")

    // ของเหลว
    cy.get('#podata-3').contains("ของเหลวกลุ่มราคา")
    cy.get('#totalpoprice-3').contains("180")

    // เช็คคำนวณ
    cy.get('#afterDiscount').contains("760.00")
    cy.get('#vatPrice').contains("53.20")
    cy.get('#paymentPrice').contains("813.20")

    cy.get('#paymentModal').click()
    cy.get('#btnrecheckConfirmfinish').click()
    cy.get('.swal2-confirm').click()
    cy.wait(500)
    cy.get('.swal2-confirm').click()

     // รายการเสร็จสิ้น
     cy.get('.status-border').contains("รายการเสร็จสิ้น")
     // ยาง
     cy.get('#podata-0').contains("ยางกลุ่มราคา")
     cy.get('#po-0 > :nth-child(6)').contains("200")
 
     // อะไหล่
     cy.get('#podata-1').contains("อะไหล่กลุ่มราคา")
     cy.get('#totalpoprice-1').contains("200")
 
     // แม็ก
     cy.get('#podata-2').contains("แม็กกลุ่มราคา")
     cy.get('#totalpoprice-2').contains("180")
 
     // ของเหลว
     cy.get('#podata-3').contains("ของเหลวกลุ่มราคา")
     cy.get('#totalpoprice-3').contains("180")
 
     // เช็คคำนวณ
     cy.get('#afterDiscount').contains("760.00")
     cy.get('#vatPrice').contains("53.20")
     cy.get('#paymentPrice').contains("813.20")
 
     cy.get('#btnBack').click()

     // เช็ครายการงานซ่อม
    cy.get('#jobrepair-0 > :nth-child(2)').should("contain.text", "ลูกค้ากลุ่มราคา")
    cy.get('#jobrepair-0 > :nth-child(6)').should("contain.text", "813.20")
    cy.get('[style="width: 12rem;"] > .status-border').should("contain.text", "รายการเสร็จสิ้น")
}