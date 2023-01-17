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
  cy.url().should("eq", Cypress.config().baseUrl + "?prequalify=true");
  pq.elements.mainheading().should("have.text", "Pre-qualify in two minutes");
  pq.elements.individual().should("have.text", "Individual");
  pq.elements.nextbtn().click();
  pq.elements.fone().should("have.text", "Pre-qualify");
});
//form one
When(
  "The user completes the form by entering personal information",
  (datatable) => {
    pq.elements
      .fmheading()
      .should("have.text", "First, tell us about yourself.");
    pq.elements.formname().should("have.text", "Personal");

    datatable.hashes().forEach((element) => {
      pq.elements
        .fname()
        .type(element.username)
        .should("have.attr", "type", "text")
        .and("be.visible");
      pq.elements
        .lname()
        .type(element.lastname)
        .should("have.attr", "type", "text")
        .and("be.visible");
      pq.elements
        .eaddress()
        .type(element.emailaddress)
        .should("have.attr", "type", "text")
        .and("be.visible");
      pq.elements
        .ceaddress()
        .type(element.confirmemailaddress)
        .should("have.attr", "type", "text")
        .and("be.visible");
      pq.elements
        .phonenumber()
        .type(element.phonenumber)
        .should("have.attr", "type", "tel")
        .and("be.visible");
    });
  }
);

Then("I pressed the next button", () => {
  pq.elements.nbtnone().click();
});

//form two
Then(
  "The user completes the form by entering residential information",
  (datatable) => {
    datatable.hashes().forEach((element) => {
      pq.elements
        .addone()
        .type(element.addone)
        .should("have.attr", "type", "text")
        .and("be.visible");

      pq.elements
        .addtwo()
        .type(element.addtwo)
        .should("have.attr", "type", "text")
        .and("be.visible");

      pq.elements
        .city()
        .type(element.city)
        .should("have.attr", "type", "text")
        .and("be.visible");

      pq.elements
        .zip()
        .type(element.zipcode)
        .should("have.attr", "type", "text")
        .and("be.visible");

      pq.elements
        .state()
        .type(element.state + "{enter}")
        .should("have.attr", "type", "text");

      console.log(element.residence);
      switch (element.residence) {
        case "rent":
          pq.elements.rent().click();
          break;
        case "own":
          pq.elements.own().click();
          break;
      }
      pq.elements
        .income()
        .type(element.mpayment)
        .should("have.attr", "type", "text")
        .and("be.visible");
    });
  }
);

//form three
Then(
  "The user completes the form by entering employment information",
  (datatable) => {
    datatable.hashes().forEach((element) => {
      switch (element.empstatus) {
        case "employed":
          pq.elements.estatus().type(element.empstatus + "{enter}");
          break;
        case "self employed":
          pq.elements.estatus().type(element.empstatus + "{enter}");
          break;
        case "retired":
          pq.elements.estatus().type(element.empstatus + "{enter}");

          break;
        case "unemployed":
          pq.elements.estatus().type(element.empstatus + "{enter}");

          break;
        case "other":
          pq.elements.estatus().type(element.empstatus + "{enter}");

          break;
      }

      pq.elements.empname().type(element.empname, { force: true });

      pq.elements
        .jobtitle()
        .type(element.jobtitle, {
          force: true,
        })
        .should("have.attr", "type", "text")
        .and("be.visible");

      pq.elements
        .gpay()
        .type(element.grossincome, {
          force: true,
        })
        .should("have.attr", "type", "text")
        .and("be.visible");
    });
  }
);

//form four
Then("The user completes the form by credit score information", (datatable) => {
  datatable.hashes().forEach((element) => {
    pq.elements
      .ssone()
      .type(element.ssone)
      .should("have.attr", "type", "tel")
      .and("be.visible");
    pq.elements
      .sstwo()
      .type(element.sstwo)
      .should("have.attr", "type", "tel")
      .and("be.visible");
    pq.elements
      .ssthree()
      .type(element.ssthree)
      .should("have.attr", "type", "tel")
      .and("be.visible");

    pq.elements.dobone().type(element.month +"{enter}");
    pq.elements.dobtwo().type(element.day +"{enter}");
    pq.elements.dobthree().type(element.year +"{enter}");
  });
});


//final page

Then("I checked the checkboxes", () => {
  pq.elements
    .fmaintag()
    .should("have.text", "Time to double check everything!");
  pq.elements.side().first().click();
  pq.elements.side().last().click();
});

Then("I clicked the recaptcha", () => {
  cy.get("iframe[src*=recaptcha]")
    .its("0.contentDocument")
    .should((d) => d.getElementById("recaptcha-token").click());
  cy.wait(5000);
});
