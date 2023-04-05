describe("Index", () => {
  it("displays the progress total", () => {
    cy.react("Progress").should("exist");
    cy.react("Progress").contains("Raised $335");
    cy.react("Progress").contains("of $1000");
  });

  it("includes form elements", () => {
    cy.react("DonationForm").should("exist");
    cy.react("DonationForm").contains("You could be donation #6!");
    cy.react("DonationForm").get("form").should("exist");
    cy.react("DonationForm").get("form input").should("exist");
  });

  it("lists donations", () => {
    cy.react("RecentDonations").should("exist");
    cy.react("RecentDonations").contains("Jo");
    cy.react("RecentDonations").contains("Rami");
    cy.react("RecentDonations").contains("Michelle");
    cy.react("RecentDonations").contains("Malinda");
    cy.react("RecentDonations").contains("Sam");
    cy.react("RecentDonations").contains("You really need this. Really.");
    cy.react("RecentDonations").contains("Here, take a break from work!");
    cy.react("RecentDonations").contains(
      "LOL! You are too funny. Happy to do this for you. :)"
    );
    cy.react("RecentDonations").contains("Have fun!");
    cy.react("RecentDonations").contains("Come visit me in Miami!");
  });
});
