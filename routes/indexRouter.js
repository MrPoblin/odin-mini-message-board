const { Router } = require("express");

const indexRouter = Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

indexRouter.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.get("/:id", (req, res) => {
    const {id} = req.params;
    res.render("message", {user: messages[id].user, text: messages[id].text, date: messages[id].added});
  });

module.exports = {indexRouter, messages};