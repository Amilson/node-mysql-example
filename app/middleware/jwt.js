var jwt = require('jsonwebtoken');
var config = require("../../config/config");

module.exports = () => {

    let verificarToken = (req, res, netx) => {
        //incluir o codigo aqui
    }

    let novoToken = (nome, email) => {
        var token = jwt.sign(
            {nome:nome, email:email}, 
            config.restritas.auth.secret,
            {algorithm:"HS256", expiresIn: "30m"}
        );

        return token;
    }

    return {
        verificarToken : verificarToken,
        novoToken : novoToken
    }
}