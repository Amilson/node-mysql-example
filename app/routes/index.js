/*var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;*/

'use strict';

module.exports = function(app) {
  var express = require('express');
  var router = express.Router();
  var fs        = require('fs');
  var path      = require('path');
  var basename  = path.basename(module.filename);

  fs
    .readdirSync(__dirname)
    .filter(function(file) {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(function(file) {
      var model = require(path.join(__dirname, file));
      app.use('/', model);
    });
}