class PrequalifyPage {
  elements = {
    prequalifyBtn: () => cy.contains("p", "Pre-qualify"),
    mainheading: () => cy.contains('p', "Pre-qualify in two minutes"),
    individual: () => cy.contains('p', "Individual"),
    //form one

    nextbtn: () => cy.get('div[class="flex justify-end"] p:nth-child(1)'),
    fmheading: () => cy.contains('p', 'First, tell us about yourself.'),
    formname: () => cy.contains('div', 'Personal'),
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

    //form three
    estatus: () => cy.contains("Employment Status"),
    empname: () => cy.get('div[class="relative"]')
      .find('input[id="Primary.employerName"]'),
    jobtitle: () => cy.get('input[id="Primary.jobTitle"]'),
    gpay: () => cy.get('input[id="Primary.annualGrossIncome"]'),

    //form four
    maintag: () => cy.contains('p', 'Pre-qualifying will not impact your credit score.'),
    nbtnthree: () => cy.get('div[class="flex justify-end"] p:nth-child(1)'),
    ssone: () => cy.get("#areaNumber"),
    sstwo: () => cy.get("#groupNumber"),
    ssthree: () => cy.get("#serialNumber"),
    dobone: () => cy.get('label[for="month"]'),
    dobtwo: () => cy.get('label[for="day"]'),
    dobthree: () => cy.get('label[for="year"]'),

    //confirm page
    fmaintag: () => cy.contains('p', 'Time to double check everything!'),
    side: () => cy.get('p[class="font-abc-repro"]'),

  };
}

export const pq = new PrequalifyPage();