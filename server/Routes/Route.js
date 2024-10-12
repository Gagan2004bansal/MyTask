const router = require('express').Router();

const {Signup} = require('../Controllers/Signup');
const {Login} = require('../Controllers/Login');

router.post('/login', Login);
router.post('/signup', Signup);
// router.post('/profile', <div>profile</div>);
// router.get('/home', () => {<div>home</div>})
// router.post('/note', <div>note</div>)
// router.post('/bookmarks', <div>bookmarks</div>)
// router.post('/drive', <div>drive</div>)

module.exports = router;