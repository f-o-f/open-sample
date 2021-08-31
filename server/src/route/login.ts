const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res) => {
    res.redirect('../front');
});

//ログイン
router.post('/', passport.authenticate('local', { session: true }), (req, res) => {
    res.json({ result: 'Login Success' });
});

export default router;
