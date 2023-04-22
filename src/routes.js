const router =require('express').Router()
const TestController = require('@controller/test')

router
 .get('/', TestController.helloworld)
 .post('/', TestController.createSomeone);
 module.exports = router