var express = require('express');
var router = express.Router();
var homeController = require("../controllers/homeController");
var userCheck = require("../middlewares/userCheckLogin");

/* GET HOME. */
router.get('/', homeController.mostrarHome);
router.get('/api/carritos', userCheck,homeController.api);
router.get('/api/productos',homeController.apiProd);
router.get('/contacto',homeController.contacto);
router.post('/contacto',homeController.contactados);
router.get('/search', homeController.search);

module.exports = router;
