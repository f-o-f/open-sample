import mongodbClient from '../../common/mongodbClient';

var express = require('express');
var router = express.Router();

router.get('/mongodb', (req, res, next) => {
    mongodbClient((err, client) => {
        if (err) {
            res.status(500).json({ message: 'MongoDB not connected.' });
            return next(err);
        }
        client.close();
        res.json({ message: 'MongoDB Connected.' });
    });
});

module.exports = router;
