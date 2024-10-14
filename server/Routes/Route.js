const router = require('express').Router();

const {Signup} = require('../Controllers/Signup');
const {Login} = require('../Controllers/Login');
const {EditProfile} = require('../Controllers/EditProfile');
const {Profile} = require('../Controllers/Profile');

router.post('/login', Login);
router.post('/signup', Signup);
router.post('/edit-profile', EditProfile);
router.get('/profile', Profile);
// router.get('/home', () => {<div>home</div>})
// router.post('/note', <div>note</div>)
// router.post('/bookmarks', <div>bookmarks</div>)
// router.post('/drive', <div>drive</div>)

module.exports = router;