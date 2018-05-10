'use strict';

module.exports = {
	globais : require('./sub/all'),
	restritas : require('./sub/' + "desenv"/*process.env.NODE_ENV*/)
};