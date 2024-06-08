const express = require("express");

function download(app, route, file) {
  app.get(route, (req, res) => {
    res.download(file);
  });
}
module.exports = download