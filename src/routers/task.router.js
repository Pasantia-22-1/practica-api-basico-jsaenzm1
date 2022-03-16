//3. importando un router para llevar el control de las rutas 

const express = require('express'); // se importa expres
const router = express.Router(); //de express solo quiero su método Router y la instancia se guarda en router
const controllers = require('../controllers/task.ctl.js')

router.get('/home', controllers.getHome); // se instancia el método de router, y se le agrega ger 
router.get('/contact', controllers.getContact);
router.get('/profile', controllers.getProfile);
router.get('/signin',controllers.getSignin);
router.get('/signup', controllers.getSignup);

module.exports = router;