const express = require("express");
const bodyParser = require("body-parser");
const mysql2 = require("mysql2");
const cors = require('cors');

const {Posts} = require('sequelize');

db.authenticate()
  .then(() => console.log("Database Connected"))
  .catch(err => console.log("Error: " + err))


const app = express();
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/posts", (req, res) => {
  // res.send("Get /api/posts/alll")
  Posts.findAll().then((posts) => {
      res.send(posts)
  })
})

app.post("/api/posts", (req, res) => {
  console.log(req.body);
  Posts.create({
    image: req.body.image,
    title: req.body.title,
    date: req.body.date,
    content: req.body.content,
    comment: req.body.comment
  }).then(posts => {
  res.send("POST Created!!")
  })
})

app.get("/api/posts/:id", (req, res) => {
   let id = req.params.id
    Posts.findOne({
    where: {id: 'postId'},
  }).then(posts => {
      res.json(posts)
    })
})

app.put("/api/posts/:id", (req, res) => {
  let postId = req.params.id
  let updatedPost = req.body
  Posts.findOne({where: {id: postId}})
  .then(posts => {
      posts.update(updatedPost)
      .then(newPost => {
        res.json(newPost)
      })
  })
})

app.delete("/api/posts/:id", (req, res) => {
  let postId = req.params.id
  Posts.destroy(
     {where: {id: postId}
   }).then(() => {
      res.send("Post Deleted");
  })
})

app.listen(4000, function() {
  console.log("Server started on port 4000");
});
