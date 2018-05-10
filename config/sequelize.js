'use strict';
//
var Sequelize = require("Sequelize");
var config = require("./../config/config");
//
const Op = Sequelize.Op;
const operatorsAliases = {  $eq: Op.eq,
                            $ne: Op.ne,
                            $gte: Op.gte,
                            $gt: Op.gt,
                            $lte: Op.lte,
                            $lt: Op.lt,
                            $not: Op.not,
                            $in: Op.in,
                            $notIn: Op.notIn,
                            $is: Op.is,
                            $like: Op.like,
                            $notLike: Op.notLike,
                            $iLike: Op.iLike,
                            $notILike: Op.notILike,
                            $regexp: Op.regexp,
                            $notRegexp: Op.notRegexp,
                            $iRegexp: Op.iRegexp,
                            $notIRegexp: Op.notIRegexp,
                            $between: Op.between,
                            $notBetween: Op.notBetween,
                            $overlap: Op.overlap,
                            $contains: Op.contains,
                            $contained: Op.contained,
                            $adjacent: Op.adjacent,
                            $strictLeft: Op.strictLeft,
                            $strictRight: Op.strictRight,
                            $noExtendRight: Op.noExtendRight,
                            $noExtendLeft: Op.noExtendLeft,
                            $and: Op.and,
                            $or: Op.or,
                            $any: Op.any,
                            $all: Op.all,
                            $values: Op.values,
                            $col: Op.col
};

const Seq = new Sequelize(config.restritas.bd.database, 
                          config.restritas.bd.username, 
                          config.restritas.bd.password, {
    dialect: config.restritas.bd.dialect,
    host: config.restritas.bd.host,
    port: config.restritas.bd.port,
    protocol: null,
    logging: false,
    define: {
        charset: 'utf8',
        dialectOptions: {collate: 'utf8_general_ci'},
        timestamps: false
    },
    operatorsAliases : operatorsAliases
});

module.exports = Seq;