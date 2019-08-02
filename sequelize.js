const Sequelize = require('sequelize');

const PostsModel = require('./models/Posts')

const sequelize = new Sequelize('bulletapi', 'root', 'root', {
  host: "127.0.0.1",
  port: 8889,
  dialect: 'mysql'
});

const Posts = PostsModel(sequelize, Sequelize)

sequelize.sync()
  .then(() => {
    console.log("tables created");
  })

module.exports = {Posts}
