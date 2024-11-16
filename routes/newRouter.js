const { Router } = require("express");
const { messages } = require("./indexRouter");

const newRouter = Router();

newRouter.get("/", (req, res) => {
  res.render("new", { title: "New Message" });
});

newRouter.post("/", (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = newRouter;
