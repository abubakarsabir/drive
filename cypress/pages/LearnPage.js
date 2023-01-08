class LearnPage {
    elements = {
      FAQButton: () => cy.contains('p','How it works / FAQs'),
      FAQHeader: () => cy.contains('p','HOW IT WORKS'),
      WelcomeButton: () => cy.contains('p','Welcome to Drive'),
      WelcomeUrl:() => cy.contains('p','https://blog-drive-us-preprod.go-vip.net/welcome-to-drive/'),
      BudgetButton: () => cy.contains('p','How to use the Budget Customizer'),
      BudgetUrl:() => cy.contains('p','https://blog-drive-us-preprod.go-vip.net/how-to-use-the-budget-customizer/'),
      prequalifiedButton: () => cy.contains('p','5 reasons to get pre-qualified for auto financing'),
      prequalifiedUrl:() => cy.contains('p','https://blog-drive-us-preprod.go-vip.net/5-reasons-to-get-pre-qualified-for-auto-financing/'),
      paymentButton: () => cy.contains('p','How car payments can help your credit score'),
      paymentUrl:() => cy.contains('p','https://blog-drive-us-preprod.go-vip.net/how-car-payments-can-help-your-credit-score/'),
    };
  }

  export const learnPage = new LearnPage();
