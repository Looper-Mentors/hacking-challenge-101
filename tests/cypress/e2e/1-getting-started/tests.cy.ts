// eslint-disable-next-line @typescript-eslint/no-unused-vars
import cypress from "cypress";
import axios from "axios";

const play = (password: string, next: string) => {
  cy.get("#pass").clear().type(password);
  cy.get("#sub").click();
  cy.url().should("include", `/${next}`);
};

describe("tests", () => {
  it("redirect", () => {
    cy.visit("http://localhost:3333");
    cy.url().should("include", "/first");
  });

  it("level 1", () => {
    cy.visit("http://localhost:3333/first");
    play("21", "second");
  });

  it("level 2", () => {
    cy.visit("http://localhost:3333/second");
    play("121", "third");
  });

  it("level 3", () => {
    cy.visit("http://localhost:3333/third");
    play("1201", "congrats");
  });

  it("check image", () => {
    cy.visit("http://localhost:3333/congrats");
    cy.get("body")
      .find("img")
      .should("have.attr", "src")
      .should(
        "include",
        "https://cdn.glitch.me/da9be128-8bf4-4a9d-8386-a3764be1534c%2Fhappy_hacker.jpg"
      );
  });

  it("check image 2", () => {
    axios({
      method: "POST",
      url: "http://localhost:3333/image",
      headers: {
        url: "https://cdn.discordapp.com/attachments/949732416514297896/1056905871088685086/AFDK6gMGs0LwPs7qEIRC6KExcT8wPqFpqeadiAZNk9C1jmOpMK5xKpVvl4eKADBcwDznwuOSQD3cP6XLKeS9BQtywevBoCDKTQw1357-h948.png",
      },
      validateStatus: () => true,
    }).then((res) => {
      console.log(res.status);
    });

    cy.visit("http://localhost:3333/congrats");
    cy.get("body")
      .find("img")
      .should("have.attr", "src")
      .should(
        "include",
        "https://cdn.discordapp.com/attachments/949732416514297896/1056905871088685086/AFDK6gMGs0LwPs7qEIRC6KExcT8wPqFpqeadiAZNk9C1jmOpMK5xKpVvl4eKADBcwDznwuOSQD3cP6XLKeS9BQtywevBoCDKTQw1357-h948.png"
      );
  });

  it("delete image", () => {
    axios({
      method: "DELETE",
      url: "http://localhost:3333/image",
      validateStatus: () => true,
    }).then((res) => {
      console.log(res.status);
    });
    cy.visit("http://localhost:3333/congrats");
    cy.get("body")
      .find("img")
      .should("have.attr", "src")
      .should(
        "include",
        "https://cdn.glitch.me/da9be128-8bf4-4a9d-8386-a3764be1534c%2Fhappy_hacker.jpg"
      );
  });
});
