// routes.js

const express = require("express");
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

function routes(app, route, render, text) {
  app.get(route,logger,  (req, res) => {
    res.render(render, { text: text });
  });
}

module.exports = routes;
