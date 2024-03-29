'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Blog.hasMany(models.Comment, {
        as: 'comments',
        foreignKey: 'post_id'
        })
      // define association here
    }
  }
  Blog.init({
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    category: DataTypes.STRING,
    isPublished: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Blog',
  });
  return Blog;
};