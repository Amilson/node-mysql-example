'use strict';

require('./config/init');

var http = require('http');
var requireDir = require('require-dir');
const express = require('./config/express');
var config = require("./config/config");

///iniciando o servidor
var porta = normalizePort(config.globais.porta);
express.set('port', porta);

var server = http.createServer(express);
server.listen(porta);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
	var port = parseInt(val, 10);
	
	if (isNaN(port)) {
		// named pipe
		return val;
	}
	
	if (port >= 0) {
		// port number
		return port;
	}
	
	return false;
}

function onError(error) {
	if (error.syscall !== 'listen') {
		throw error;
	}
	
	var bind = porta;
	
	//verifica os erros mais comuns
	switch (error.code) {
		case 'EACCES':
		console.error("Porta "+bind+" requer privilégios de administrador");
		process.exit(0);
		break;
		case 'EADDRINUSE':
		console.error("Porta "+bind+" já esta em uso");
		process.exit(0);
		break;
		default:
		throw error;
	}
}
	
function onListening() {
	var addr = server.address();
	var tp = addr.port;
    
    console.log("Rodando em "+ tp);
}

/////////////////////////////////////
const models = require('./app/models');

console.log("Iniciando banco de dados...");
models.sequelize.sync().then(()=>{
    console.log("Banco de dados ok :)");
}).catch((e)=>{
	console.log("Falhou "+ e);
});

module.exports = express;