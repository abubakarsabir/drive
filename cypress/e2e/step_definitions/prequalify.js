import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { pq } from "@pages/PrequalifyPage";

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
  pq.elements.nextbtn().click();
  pq.elements.fone().should("have.text", "Pre-qualify");
});
//form one
When("I entered the username", () => {
  pq.elements.fname().type("Gary");
});

When("I entered the lastname", () => {
  pq.elements.lname().type("BEATTIE");
});

When("I entered the emailaddress", () => {
  pq.elements.eaddress().type("aalrawi@autofi.io");
});

When("I entered the confirmemailaddress", () => {
  pq.elements.ceaddress().type("aalrawi@autofi.io");
});

When("I entered the phonenumber", () => {
  pq.elements.phonenumber().type("6660388331");
});

Then("I clicked the next button one", () => {
  pq.elements.nbtnone().click();
});

//form two
When("I entered the addone", () => {
  pq.elements.addone().type("5747 W MISSOURI AVE");
});

When("I entered the addtwo", () => {
  pq.elements.addtwo().type("AVE LOT134");
});

When("I entered the city", () => {
  pq.elements.city().type("Jefferson City");
});

When("I entered the zipcode", () => {
  pq.elements.zip().type("85301");
});

When("I selected the state", () => {
  pq.elements.state().type("Arizona{enter}");
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
  pq.elements.income().type("50000");
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
      pq.elements.estatus().type("Employed{enter}");
      break;
    case "self employed":
      pq.elements.estatus().type("Self Employed{enter}");
      break;
    case "retired":
      pq.elements.estatus().type("Retired{enter}");
      break;
    case "unemployed":
      pq.elements.estatus().type("Unemployed{enter}");
      break;
    case "other":
      pq.elements.estatus().type("Other{enter}");
      break;
  }
});

When("I entered employername", () => {
  pq.elements.empname().type("Ahmed", {
    force: true,
  });
});

When("I entered the jobtitle", () => {
  pq.elements.jobtitle().type("Automation SDET", {
    force: true,
  });
});

When("I entered the grossannualincome", () => {
  pq.elements.gpay().type("700000", {
    force: true,
  });
});

Then("I clicked the next button three", () => {
  pq.elements.nbtnthree().click();
});
//form four
When("I entered the socialsecuritynumber", () => {
  pq.elements.ssone().type("000");
  pq.elements.sstwo().type("00");
  pq.elements.ssthree().type("0000");
});

When("I entered the dob", () => {
  pq.elements.dobone().type("01{enter}");
  pq.elements.dobtwo().type("23{enter}");
  pq.elements.dobthree().type("1992{enter}");
});

Then("I clicked the next button four", () => {
  pq.elements.nbtnfour().click();
  cy.wait(5000);
});

//final page

When("I checked the checkboxes", () => {
  cy.wait(5000);
  pq.elements.side().first().click();
  pq.elements.side().last().click();
});

Then("I clicked the recaptcha", () => {
  cy.get("iframe[src*=recaptcha]")
    .its("0.contentDocument")
    .should((d) => d.getElementById("recaptcha-token").click());
  cy.wait(5000);
});
