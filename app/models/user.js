'use strict';

const DataTypes = require("sequelize/lib/data-types");
const Seq = require("./../../config/sequelize");
//const bcrypt = require("bcrypt");

module.exports = () => {
    var User = Seq.define("User", {
        id : {
            type : DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nome : {
            type : DataTypes.STRING,
            allowNull: false
        },
        email : {
            type : DataTypes.STRING,
            allowNull: false
        },
        senha : {
            type : DataTypes.STRING,
            allowNull: false
        },
        dataInclusao : {
            type : DataTypes.DATE,
            allowNull: false,
            defaultValue : Seq.literal('CURRENT_TIMESTAMP')
        },
        dataAtualizacao : {
            type : DataTypes.DATE,
            allowNull: false,
            defaultValue : Seq.literal('CURRENT_TIMESTAMP'),
            onUpdate : Seq.literal('CURRENT_TIMESTAMP')
        }
    }, {
        indexes: [{
                name: "indexUserByEmail",
                fields: ["email"]
            },{
                name: "indexUserByNome",
                fields: ["nome"]
            }
        ]
    });

    return {
        User:User
    }
};

//User.sync();

//export default User;
//module.exports = User;