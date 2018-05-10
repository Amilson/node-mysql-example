var express = require('express');
var router = express.Router();


let regAuth = async(req, res, netx) => {
  try{

  }catch(err){
    res.status(401).send({
      
    })
  }
}

router.get('/me', function(req, res, next) {
  res.send('fedo');
});

module.exports = router;