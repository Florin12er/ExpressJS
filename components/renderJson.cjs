const express = require("express");

function renderJson(app, api, json) {
  app.get(api, (req, res) => {
    res.json(json);
  });
}
module.exports = renderJson
