'use strict';

/**
 * Imports
 */

var https = require("https");

var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var cookieParser = require("cookie-parser");
var helmet = require("helmet");
var errorMessages = require("./errors");
var Promise = require("bluebird");

// Inicializando  o app
var app = express();
app.listenAsync = Promise.promisify(app.listen).bind(app);

app.use(cookieParser());
app.use(bodyParser.json({ type: 'application/*', limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true }));    
app.use(methodOverride());

// Utilizar helmet para deixar os cabeçalhos de requisições http mais seguros
app.use(helmet());
app.disable('x-powered-by');

//setando as rotas
require('./../app/routes')(app);

app.use(function(err, req, res, next) {
	let msgErro;
	msgErro = errorMessages.SERVER_ERROR;
	res.status(500).send(msgErro+" "+err.message);
});

module.exports = app;