import { Router } from "express";

const routes = Router();
let imgURL: any =
  "https://cdn.glitch.me/da9be128-8bf4-4a9d-8386-a3764be1534c%2Fhappy_hacker.jpg";

routes.get("/", (req, res) => {
  res.sendfile(__dirname + "/public/game/index.html");
});

routes.get("/image", (req, res) =>
  res.send({
    url:
      imgURL && imgURL != ""
        ? imgURL
        : "https://cdn.glitch.me/da9be128-8bf4-4a9d-8386-a3764be1534c%2Fhappy_hacker.jpg",
  })
);

routes.post("/image", (req, res) => {
  imgURL = req.headers.url;
  res.send(`Image was set to ${imgURL}`);
});

routes.delete("/image", (req, res) => {
  imgURL = "";
  res.end();
});

export default routes;
