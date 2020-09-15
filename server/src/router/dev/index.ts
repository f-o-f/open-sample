import * as Express from 'express';
import mongodbClient from '../../middleware/mongodbClient';

const router = Express.Router();

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

export default router;