const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.html", { title: "Web principal" });
});

router.get("/contact", (req, res) => {
  res.render("contact.html", { title: "Contacto" });
});

module.exports = router;
