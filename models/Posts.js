const sequelize = require("./../sequelize");
const Sequelize = require("sequelize");

module.exports = (sequelize, type) => {
  const Posts = sequelize.define('posts', {
    // id: {
    //   type: Sequelize.INTEGER(11),
    //   allowNull: false,
    //   autoIncrement: true,
    //   primaryKey: true
    // },
    image: {
      type: Sequelize.STRING(500),
      allowNull: true
    },
    title: {
      type: Sequelize.STRING(200),
      allowNull: false
    },
    date: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    content: {
      type: Sequelize.STRING(500),
      allowNull: false
    },
    comment: {
      type: Sequelize.STRING(500),
      allowNull: true
    }
  })
  return Posts
};
