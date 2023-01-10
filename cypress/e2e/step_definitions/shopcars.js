import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor";
import {
    scp
} from "@pages/ShopCarsPage";
Given("85301 is the zip code", () => {
    cy.visit("/", {
        headers: {
            accept: "application/json, text/plain, */*",
            "user-agent": "axios/0.27.2",
        },
    });
    scp.elements.zipCode().invoke('text').then((text) => {
        expect(text.trim()).equal('85003');
    });
});

When("The user selects the ShopCars tab", () => {
    scp.elements.shopCarsbtn().click();
    cy.url().should('eq', 'https://drive-qa.santanderconsumerusa.com/cars?zip-code=85003&distance=50mi');
    scp.elements.headerText().invoke('text').then((text) => {
        expect(text.trim()).equal('Get your rate and customize your terms.');
    });
    scp.elements.conditionTab().
    click();
    cy.wait(5000)
})

Then("The user tries various {string} within the condition tab", (options) => {

    switch (options) {
        case "New":
            scp.elements.newCheckBox().click()
            scp.elements.showCarsBtn().click()
            .invoke('text').then((text) => {
               expect(text.trim()).equal('Show 1695 cars');
            });
            cy.wait(8000)
            break;
        case "Used":
            scp.elements.usedCheckBox().click()
            scp.elements.showCarsBtn().click()
            .invoke('text').then((text) => {
                expect(text.trim()).equal('Show 1510 cars');
             });
            cy.wait(8000)
            break;
        case "Certified Pre-owned":
            scp.elements.certifiedCheckBox().click()
            scp.elements.showCarsBtn().click()
            .invoke('text').then((text) => {
                expect(text.trim()).equal('Show 238 cars');
             });
            cy.wait(8000)
            break;


    }

})
