'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var Seq = require("./../../config/sequelize");
var basename  = path.basename(module.filename);
var indexModels = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = Seq['import'](path.join(__dirname, file));
    indexModels[model.name] = model;
  });

Object.keys(indexModels).forEach(function(modelName) {
  if (indexModels[modelName].associate) {
    indexModels[modelName].associate(indexModels);
  }
});

indexModels.Sequelize = Seq;
indexModels.sequelize = Seq;

module.exports = indexModels;