import { Router } from "express";

const routes = Router();
let imgURL: any =
  "https://cdn.glitch.me/da9be128-8bf4-4a9d-8386-a3764be1534c%2Fhappy_hacker.jpg";

routes.get("/", (req, res) => {
  return res.redirect("/first");
});

routes.get("/first", (req, res) => {
  res.sendfile(__dirname + "/public/first/index.html");
});

routes.get("/second", (req, res) => {
  res.sendfile(__dirname + "/public/second/index.html");
});

routes.get("/third", (req, res) => {
  res.sendfile(__dirname + "/public/third/index.html");
});

routes.get("/congrats", (req, res) => {
  res.send(
    `<!DOCTYPE html>\r\n<html lang="en">\r\n  <head>\r\n    <title>Winner winner, chicken dinner!</title>\r\n    <link\r\n      rel="icon"\r\n      href="https://static.wixstatic.com/media/91df06_20bfd91c87ae4dbda1c7ff104680f58a%7Emv2_d_1500_1500_s_2.jpg/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/91df06_20bfd91c87ae4dbda1c7ff104680f58a%7Emv2_d_1500_1500_s_2.jpg"\r\n    />\r\n    <meta charset="utf-8" />\r\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\r\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\r\n    <!-- import the webpage\'s stylesheet -->\r\n    <style>\r\n      /* CSS files add styling rules to your content */\r\n\r\n      body {\r\n        font-family: "Benton Sans", "Helvetica Neue", helvetica, arial,\r\n          sans-serif;\r\n        margin: 2em;\r\n        background: black;\r\n      }\r\n\r\n      h1 {\r\n        font-style: italic;\r\n        color: #fff;\r\n      }\r\n\r\n      input[type="password"] {\r\n        width: 100%;\r\n        padding: 12px 20px;\r\n        margin: 8px 0;\r\n        box-sizing: border-box;\r\n        border: 2px solid #edba39;\r\n        border-radius: 4px;\r\n      }\r\n\r\n      .button {\r\n        background-color: #edba39; /* Green */\r\n        border: none;\r\n        color: white;\r\n        padding: 15px 32px;\r\n        text-align: center;\r\n        display: inline-block;\r\n        font-size: 16px;\r\n        margin: 4px 2px;\r\n        cursor: pointer;\r\n      }\r\n\r\n      .button3 {\r\n        width: 100%;\r\n      }\r\n\r\n      .testClass {\r\n        animation: shake 0.5s;\r\n        animation-iteration-count: 1;\r\n        width: 100%;\r\n        padding: 12px 20px;\r\n        margin: 8px 0;\r\n        box-sizing: border-box;\r\n        border: 2px solid #34b1eb;\r\n        border-radius: 4px;\r\n      }\r\n\r\n      @keyframes shake {\r\n        0% {\r\n          transform: translate(1px, 1px) rotate(0deg);\r\n        }\r\n        10% {\r\n          transform: translate(-1px, -2px) rotate(-1deg);\r\n        }\r\n        20% {\r\n          transform: translate(-3px, 0px) rotate(1deg);\r\n        }\r\n        30% {\r\n          transform: translate(3px, 2px) rotate(0deg);\r\n        }\r\n        40% {\r\n          transform: translate(1px, -1px) rotate(1deg);\r\n        }\r\n        50% {\r\n          transform: translate(-1px, 2px) rotate(-1deg);\r\n        }\r\n        60% {\r\n          transform: translate(-3px, 1px) rotate(0deg);\r\n        }\r\n        70% {\r\n          transform: translate(3px, 1px) rotate(-1deg);\r\n        }\r\n        80% {\r\n          transform: translate(-1px, -1px) rotate(1deg);\r\n        }\r\n        90% {\r\n          transform: translate(1px, 2px) rotate(0deg);\r\n        }\r\n        100% {\r\n          transform: translate(1px, -2px) rotate(-1deg);\r\n        }\r\n      }\r\n\r\n      .watermark {\r\n        position: absolute;\r\n        right: 0px;\r\n        bottom: 0px;\r\n        width: 10%;\r\n      }\r\n\r\n      img {\r\n        width: 50%;\r\n      }\r\n    </style>\r\n  </head>\r\n  <body>\r\n    <center>\r\n      <h1>Congratulations!</h1>\r\n  <img src =${
      imgURL && imgURL != ""
        ? imgURL
        : "https://cdn.glitch.me/da9be128-8bf4-4a9d-8386-a3764be1534c%2Fhappy_hacker.jpg"
    } />\r\n    </center>\r\n    <a href="https://www.loop.org.il"\r\n      ><img\r\n        class="watermark"\r\n        src="https://static.wixstatic.com/media/91df06_bd1988a2cb234c9cbe27d7d3ddb10069~mv2.png"\r\n        align="bottom|right"\r\n    /></a>\r\n  </body>\r\n</html>`
  );
});

routes.post("/image", (req, res) => {
  imgURL = req.headers.url;
  res.send(`Image was set to ${imgURL}`);
});

routes.delete("/image", (req, res) => {
  imgURL = "";
  res.end();
});

export default routes;
