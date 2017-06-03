var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var models = require('../models');
var methodOverride = require('method-override');


router.get('/', function(req, res) {
    res.redirect('/burgers')
});


router.get('/burgers', function(req, res) {
    models.burgers.findAll()
        .then(function(data) {
            res.render('index', { burger: data });
        })

});

router.post('/burgers/create', function(req, res) {
    models.burgers.create({
            burger_name: req.body.name,
            devoured: 0
        })
        .then(function() {
            res.redirect('/burgers');
        });
});


router.put('/burgers/update/:id', function(req, res) {
    var burgId = req.params.id;
    models.burgers.update({ devoured: true }, { where: { id: burgId } }).then(function() {
        res.redirect('/burgers');
    });
});


router.delete('/burgers/delete/:id', function(req, res) {
    var burgId = req.params.id;
    models.burgers.destroy({ where: { id: burgId } }).then(function() {
        res.redirect('/burgers')
    });
});
module.exports = router;
