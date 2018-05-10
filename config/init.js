'use strict';

//setando como desenv para desenvolvimento caso nao estiver definido nas variaveis do sistema
if( process.env.NODE_ENV == "undefined" ||
    process.env.NODE_ENV == "" ||
    process.env.NODE_ENV == null){
    process.env.NODE_ENV = "desenv";
}

const confInicial = require("../config/sub/"+process.env.NODE_ENV+".js");
//const confInicial = require("./config/sub/desenv.js");

if(!confInicial){
    process.env.NODE_ENV = "desenv";
}