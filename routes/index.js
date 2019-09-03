var express = require('express');
var router = express.Router();
var businessRules = require('./businessRules.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', 
    { 
        title: 'Express',    
        foo: businessRules.getString()
    })
});

module.exports = router;