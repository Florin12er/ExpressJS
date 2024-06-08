const express = require("express");
const router = express.Router();
const routes = require("../components/routes.cjs");
const users = [{ name: "Sebastian" }, { name: "Apetrei" }];
const app = express()
app.use(express.urlencoded({extended: true}))

routes(router, "/", "/home/florin/Personal/ExpressJs/views/user.ejs");
routes(router, "/new", "/home/florin/Personal/ExpressJs/views/users/new.ejs", "test")

router.post("/", (req, res) => {
    const isValid = true
    if(isValid) {
        users.push({text: req.body.text})
        res.redirect(`/users/${users.length - 1}`)
    }else {
        console.log("Error")
        res.render("/home/florin/Personal/ExpressJs/views/users/new.ejs", {text: req.body.text})
    }
    res.send("hi")
});
router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    id = req.params.id;
    res.send(`user Get ${id}`);
  })
  .put((req, res) => {
    id = req.params.id;
    res.send(`user Put ${id}`);
  })
  .delete((req, res) => {
    id = req.params.id;
    res.send(`user delete${id}`);
  });

router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});
module.exports = router;
