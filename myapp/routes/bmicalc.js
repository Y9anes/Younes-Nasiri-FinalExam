
const { Prisma } = require('@prisma/client');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  function bmi(weight, height) {

    let bmi = weight / (height ** 2)
  
    let c = "Normal"
  
    switch (true) {
      case bmi <= 18.5:
        c = "Underweight";
        break;
  
      case bmi <= 25.0:
        c = "Normal";
        break;
  
      case bmi <= 30.0:
      
        c = "Overweight";
        break;
  
      default:
        c = "Obese"
  
    }
    return c;
  
  }
  res.send({
    result:bmi (req.body.weight,req.body.height)

  })

});


module.exports = router;
