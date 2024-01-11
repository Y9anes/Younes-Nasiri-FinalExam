var express = require('express');
var router = express.Router();

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()


/* GET bmi . */
router.get('/', function(req, res, next) {
  const users = prisma.user.findMany();
  res.send(bmi);
});

/* POST bmi. */
router.post('/', async function(req, res, next) {
  const bmi = req.body;
  const createdbmi = await prisma.user.create({
    data: user,
  })
  res.send(createdbmi);
});


module.exports = router;
