"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (DataTypes, sequelize) => {
  class Blog extends Model {
    static associate(models) {
      Blog.belongsTo(models.Admin, { foreignKey: "authorId", as: "author" });
    }
  }

  Blog.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      imagePath: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      tags: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      authorId: {
        type: DataTypes.INTEGER,
        references: {
          model: "admins",
          key: "id",
        },
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Blog",
    }
  );

  return Blog;
};
