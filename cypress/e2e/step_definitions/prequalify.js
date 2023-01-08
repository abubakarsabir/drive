import {
  Given,
  When,
  Then
} from "@badeball/cypress-cucumber-preprocessor";
import {
  pq
} from "@pages/PrequalifyPage";
beforeEach(() => {
  cy.fixture("forms.json").then((forms) => {
    fname = forms[0].firstName;
    lname = forms[0].lastName;
    eaddress = forms[0].emailAddress;
    caddress = forms[0].cemailAddress;
    pnumber = forms[0].phoneNumber;

    addOne = forms[1].addOne;
    addTwo = forms[1].addTwo;
    city = forms[1].city;
    code = forms[1].zip;
    mpayment = forms[1].monthlyPayment;

    ename = forms[2].employerName;
    job = forms[2].jobTitle;
    grossSalary = forms[2].grossIncome;

    ssone = forms[3].ssone;
    sstwo = forms[3].sstwo;
    ssthree = forms[3].ssthree;


  });
});
Given("I launch the drive site and clicked the prequalify button", () => {
  cy.visit("/", {
    headers: {
      accept: "application/json, text/plain, */*",
      "user-agent": "axios/0.27.2",
    },
  });
  pq.elements.prequalifyBtn().click();
  cy.url().should(
    "eq",
    "https://drive-qa.santanderconsumerusa.com/?prequalify=true"
  );
  pq.elements.mainheading().should("have.text", "Pre-qualify in two minutes");
  pq.elements.individual().should("have.text", "Individual");
  pq.elements.nextbtn().click();
  pq.elements.fone().should("have.text", "Pre-qualify");
});
//form one
When("I entered the username", () => {
  pq.elements.fmheading().should("have.text", "First, tell us about yourself.");
  pq.elements.formname().should("have.text", "Personal");
  pq.elements
    .fname()
    .type(fname)
    .should("have.attr", "type", "text")
    .and("be.visible");
});

When("I entered the lastname", () => {
  pq.elements
    .lname()
    .type(lname)
    .should("have.attr", "type", "text")
    .and("be.visible");
});

When("I entered the emailaddress", () => {
  pq.elements
    .eaddress()
    .type(eaddress)
    .should("have.attr", "type", "text")
    .and("be.visible");
});

When("I entered the confirmemailaddress", () => {
  pq.elements
    .ceaddress()
    .type(caddress)
    .should("have.attr", "type", "text")
    .and("be.visible");
});

When("I entered the phonenumber", () => {
  pq.elements
    .phonenumber()
    .type(pnumber)
    .should("have.attr", "type", "tel")
    .and("be.visible");
});

Then("I clicked the next button one", () => {
  pq.elements.nbtnone().click();
});

//form two
When("I entered the addone", () => {
  pq.elements
    .addone()
    .type(addOne)
    .should("have.attr", "type", "text")
    .and("be.visible");
});

When("I entered the addtwo", () => {
  pq.elements
    .addtwo()
    .type(addTwo)
    .should("have.attr", "type", "text")
    .and("be.visible");
});

When("I entered the city", () => {
  pq.elements
    .city()
    .type(city)
    .should("have.attr", "type", "text")
    .and("be.visible");
});

When("I entered the zipcode", () => {
  pq.elements
    .zip()
    .type(code)
    .should("have.attr", "type", "text")
    .and("be.visible");
});

When("I selected the state", () => {
  pq.elements
    .state()
    .type("Arizona{enter}")
    .should("have.attr", "type", "text");
});

Then("I selected the {string}", (residence) => {
  switch (residence) {
    case "rent":
      pq.elements.rent().click();
      break;
    case "own":
      pq.elements.own().click();
      break;
  }
});

When("I entered the monthlypayment", () => {
  pq.elements
    .income()
    .type(mpayment)
    .should("have.attr", "type", "text")
    .and("be.visible");
});

Then("I clicked the next button two", () => {
  pq.elements.nbtntwo().click({
    force: true,
  });
  cy.wait(5000);
});
//form three
Then("I selected different {string}", (empstatus) => {
  switch (empstatus) {
    case "employed":
      pq.elements
        .estatus()
        .type("Employed{enter}")
        .should("have.attr", "type", "text");
      break;
    case "self employed":
      pq.elements
        .estatus()
        .type("Self Employed{enter}")
        .should("have.attr", "type", "text");
      break;
    case "retired":
      pq.elements
        .estatus()
        .type("Retired{enter}")
        .should("have.attr", "type", "text");
      break;
    case "unemployed":
      pq.elements
        .estatus()
        .type("Unemployed{enter}")
        .should("have.attr", "type", "text");
      break;
    case "other":
      pq.elements
        .estatus()
        .type("Other{enter}")
        .should("have.attr", "type", "text");
      break;
  }
});

When("I entered employername", () => {
  pq.elements.empname().type(ename, {
      force: true,
    }).should("have.attr", "type", "text")
    .and("be.visible");
});

When("I entered the jobtitle", () => {
  pq.elements.jobtitle().type(job, {
      force: true,
    }).should("have.attr", "type", "text")
    .and("be.visible");
});

When("I entered the grossannualincome", () => {
  pq.elements.gpay().type(grossSalary, {
      force: true,
    }).should("have.attr", "type", "text")
    .and("be.visible");
});

Then("I clicked the next button three", () => {
  pq.elements.nbtnthree().click();
  pq.elements.maintag()
    .should("have.text", "Pre-qualifying will not impact your credit score.");
});
//form four
When("I entered the socialsecuritynumber", () => {
  pq.elements.ssone().type(ssone)
    .should("have.attr", "type", "tel")
    .and("be.visible");
  pq.elements.sstwo().type(sstwo).should("have.attr", "type", "tel")
    .and("be.visible");
  pq.elements.ssthree().type(ssthree).should("have.attr", "type", "tel")
    .and("be.visible");
});

When("I entered the dob", () => {
  pq.elements.dobone().type("01{enter}");
  pq.elements.dobtwo().type("23{enter}");
  pq.elements.dobthree().type("1992{enter}");
});

Then("I clicked the next button four", () => {
  pq.elements.nbtnfour().click();
});

//final page

When("I checked the checkboxes", () => {
  pq.elements.fmaintag().should('have.text', "Time to double check everything!");
  pq.elements.side().first().click();
  pq.elements.side().last().click();
});

Then("I clicked the recaptcha", () => {
  cy.get("iframe[src*=recaptcha]")
    .its("0.contentDocument")
    .should((d) => d.getElementById("recaptcha-token").click());
  cy.wait(5000);
});
