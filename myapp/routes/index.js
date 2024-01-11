const { Prisma } = require('@prisma/client');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET bmi. */
router.get('/', async function(req, res, next) {
  const bmi = req.body;
  const bmicalcRouter = await prisma.user.create ({
    data: bmi,
  })

  res.render(bmicalcRouter);
});

module.exports = router;
