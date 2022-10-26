const router = require('express').Router();
const restrict = require('../middlewares/restrict');
const auth = require('../controllers/authController');

// iNDEX
// add the middleware so people who authorize to see index page just the authenticated userj
router.get('/', restrict, (req, res) => res.render('index'));


// REGISTER
router.get('/auth/register', (req, res) => res.render('register')); // render page
router.post('/auth/register', auth.register); // method

// LOGIN WITH FACEBOOK
router.get('/auth/login/facebook', (req, res) => res.render('login')); // render page
router.post('/auth/login/facebook', auth.login); // method 

// WHOAMI
router.get('/auth/whoami', restrict, auth.whoami)

module.exports = router
