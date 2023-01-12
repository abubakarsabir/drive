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
    //condition tab locators
    conditionTab: () => cy.get("h6").contains("Condition"),
    newCheckBox: () => cy.get('div[class="flex items-start"]').contains("New"),
    showCarsBtn: () =>
      cy
      .get(
        'footer[class="border-t-1 border-neutral-gum flex items-center justify-between border-t p-4 pb-6"]'
      )
      .find('div').siblings().eq(1),
    usedCheckBox: () =>
      cy.get('div[class="flex items-start"]').contains("Used"),
    certifiedCheckBox: () =>
      cy.get('div[class="flex items-start"]').contains("Certified Pre-owned"),

    cclear: () =>
      cy
      .get('span[class="flex cursor-pointer items-center gap-3"]')
      .contains("Clear Condition"),

    //body type locators
    bodyTypeBtn: () =>
      cy
      .get('div[class="flex items-center space-x-2"]')
      .contains("h6", "Body Type"),
      
      convertible:()=> cy.contains('p','Convertible'),
      coupe:()=> cy.contains('p',"Coupe"),
      hatchBack:()=> cy.contains('p',"Hatchback"),
      miniVan:()=> cy.contains('p',"Minivan"),
      sedan:()=> cy.contains('p',"Sedan"),
      suv:()=> cy.contains('p',"SUV"),
      truck:()=> cy.contains('p',"Truck"),
      wagon:()=> cy.contains('p',"Wagon")

  };
}

export const scp = new ShopCarsPage();