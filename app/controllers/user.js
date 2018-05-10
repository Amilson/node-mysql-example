const model = require("../models/user")();
const User = model.User;
const jwt = require("../middleware/jwt")();

module.exports = () => {

    let criarConta = (data) => {
        console.log(data);
        return new Promise(async(resolve, reject) => {
            User.findOrCreate({
                where: {
                    email: data.email
                },
                defaults:{
                    nome: data.nome,
                    senha : data.senha
                }
            }).spread((user, created) => {
                let result;
                if(created){
                    result = {status:"ok", token:jwt.novoToken(user.nome,user.email)}
                    console.log("criou");
                    resolve(result);
                }else{
                    result = {status:"nok", token:""}
                    console.log("nao criou");
                    resolve(result);
                }
            });
        });
    }

    let getAll = (data) => {
        return new Promise(async(resolve,reject) => {
            try {
                let result;
    
                if (data && data.id) {
                    result  = await User.findById(data.id);
                } else {
                    result  = await User.findAll();
                }
                resolve(result);
            } catch (error) {
                console.log(`Erro pessoa não indentificada`)
                reject(error.message);
            }
        });
    }

    return {
        criarConta : criarConta,
        getAll : getAll
    }
}