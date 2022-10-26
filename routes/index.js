const router = require('express').Router();
const passport = require('passport')
const auth = require('../controllers/auth')

// iNDEX
// add the middleware so people who authorize to see index page just the authenticated userj
router.get('/', (req, res) => res.render('pages/index.ejs'));

// PROFILES
router.get('/profile', auth.isLoggedIn, (req, res) => {
    res.render('pages/profile.ejs', { 
        user: req.user
    });
});


// ERROR
router.get('/error', auth.isLoggedIn, (req, res) => {
    res.render('pages/error.ejs');
});


// LOGIN WITH FACEBOOK
router.get('/auth/facebook',
    passport.authenticate('facebook', {
        scope:['public_profile', 'email']
    })
)
router.get('/auth/facebook/callback', 
    passport.authenticate('facebook', { 
        successRedirect: '/profile',
        failureRedirect: '/error',
})); // method 

// LOGOUT
router.get('/logout', (req, res) => {
    res.logout();
    res.redirect('/');
})


module.exports = router;
