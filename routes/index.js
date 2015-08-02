var express = require('express');
var router = express.Router();

var isoController= require('../controllers/consulta_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'isoBD' });
});


router.param('consId', isoController.load);

router.get('/consulta', isoController.index);

router.get('/consulta/:consId(\\d+)', isoController.show);
router.get('/consulta/:consId(\\d+)/lista', isoController.lista);
router.get('/consulta/new', isoController.new);

router.post('/consulta/create', isoController.create);

router.get('/autor', isoController.autor);
module.exports = router;
