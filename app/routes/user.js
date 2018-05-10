var express = require('express');
var router = express.Router();
const User = require("../controllers/user")();

/*
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;*/

let get = async(req, res, next) =>{
  try {
      let result =  await User.getAll();
      res.json(result);
  } catch (error) {
      res.status(500).send({
          message:error 
          });
  }
}

let criarConta = async(req, res, next) =>{
  console.log("1222");
  try {
      console.log("1");
      console.log(req.body);
      let result =  await User.criarConta(req.body);
      res.json(result);
  } catch (error) {
      res.status(500).send({
          message:error 
          });
  }
}

let post = async(req,res,next) => {
  try {
      
  } catch (error) {
      
  }
}

router.get('/',get);
router.post('/criarConta',criarConta);

module.exports = router;