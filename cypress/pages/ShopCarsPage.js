class ShopCarsPage {
  elements = {
    zipCode: () =>
      cy
        .get(".group.flex.grow.cursor-pointer.items-center.justify-end")
        .find(
          'p[class="font-abc-repro text-evergreen-100 mx-2 font-medium text-focus"]'
        ),
    shopCarsbtn: () => cy.contains("p", "Shop Cars"),
    headerText: () =>
      cy.contains("h6", "Get your rate and customize your terms."),
    //condtion tab locators
    conditionTab: () => cy.get("h6").contains("Condition"),
    newCheckBox: () => cy.get('div[class="flex items-start"]').contains("New"),
    showCarsBtn: () =>
      cy
        .get(
          'footer[class="border-t-1 border-neutral-gum flex items-center justify-between border-t p-4 pb-6"]'
        )
        .find('p[class="font-abc-repro select-none"]'),
    usedCheckBox: () =>
      cy.get('div[class="flex items-start"]').contains("Used"),
    certifiedCheckBox: () =>
      cy.get('div[class="flex items-start"]').contains("Certified Pre-owned"),
  };
}

export const scp = new ShopCarsPage();
