import * as Express from 'express';
import mongodbClient from '../../middleware/mongodbClient';
import { oauth_clients } from '../../middleware/oauth_clients ';
import * as Nanoid from 'nanoid'

const router = Express.Router();
// クライアント取得
router.get('/oauth/client/:id', (req, res, next) => {
    const user_id = Number(req.params.id);
    mongodbClient((err, client, db) => {
        if (err) {
            client.close();
            res.status(500).json({ message: err.message });
            return next(err);
        }
        db.collection<oauth_clients>('oauth_client', (err, collection) => {
            collection.findOne({ user_id: user_id }, (err, result) => {
                if (err) {
                    client.close();
                    res.status(500).json({ message: err.message });
                    return next(err);
                }

                if (result == null) {
                    res.status(404).json({ message: 'Not found.' });
                    return next(err);
                } else {
                    res.json(result);
                    client.close();
                }
            })
                ;
        });
    });
});

export default router;