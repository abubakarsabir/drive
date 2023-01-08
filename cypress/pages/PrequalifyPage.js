class PrequalifyPage {
  elements = {
    prequalifyBtn: () => cy.contains("p", "Pre-qualify"),
    //form one
    nextbtn: () => cy.get('div[class="flex justify-end"] p:nth-child(1)'),
    fone: () => cy.get('h3[class="font-abc-repro text-2xl md:text-3xl"]'),
    fname: () => cy.get('input[id="Primary.firstName"]'),
    lname: () => cy.get('input[id="Primary.lastName"]'),
    eaddress: () => cy.get('input[id="Primary.email"]'),
    ceaddress: () => cy.get('input[id="Primary.emailConfirm"]'),
    phonenumber: () => cy.get('input[id="Primary.phoneNumber"]'),
    nbtnone: () => cy.get(".inset-x-0 > .justify-end"),
    //form two
    addone: () => cy.get('input[id="Primary.streetAddress1"]'),
    addtwo: () => cy.get('input[id="Primary.streetAddress2"]'),
    city: () => cy.get('input[id="Primary.city"]'),
    zip: () => cy.get('input[id="Primary.zip"]'),
    state: () => cy.get(".css-ackcql>input"),
    rent: () => cy.get(".space-y-6 > .text-center > :nth-child(1)"),
    own: () => cy.get(".space-y-6 > .text-center > :nth-child(2)"),
    income: () => cy.get('input[id="Primary.monthlyPayment"]'),
    nbtntwo: () => cy.contains("Next"),
    //form three
    estatus: () => cy.get(".css-ackcql>input"),
    empname: () => cy.get('input[id="Primary.employerName"]'),
    jobtitle: () => cy.get('input[id="Primary.jobTitle"]'),
    gpay: () => cy.get('input[id="Primary.annualGrossIncome"]'),
    //form four
    nbtnthree: () => cy.get('div[class="flex justify-end"] p:nth-child(1)'),
    ssone: () => cy.get("#areaNumber"),
    sstwo: () => cy.get("#groupNumber"),
    ssthree: () => cy.get("#serialNumber"),
    dobone: () => cy.get('label[for="month"]'),
    dobtwo: () => cy.get('label[for="day"]'),
    dobthree: () => cy.get('label[for="year"]'),
    nbtnfour: () => cy.get('div[class="flex justify-end"] p:nth-child(1)'),

    //confirm page
    side: () => cy.get('p[class="font-abc-repro"]'),

  };
}

export const pq = new PrequalifyPage();
