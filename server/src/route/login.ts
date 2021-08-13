import * as app from 'express';
import mongodbClient from '../common/mongodbClient';
import { userModel } from '../models/userModel';

const nanoid = require('nanoid');
var router = app.Router();

// 認証画面取得
router.get('/', (req, res, next) =>{
    const id = req.body.id;
    const password = req.body.password;

    mongodbClient((err, client, db) => {
        if (err) {
            res.status(500).json({ message: 'MongoDB not connected.' });
            return next(err);
        }
        const collection = db.collection<userModel>('user');
        collection.findOne({ id:id, password:password }, (err, result) => {
            if (err) {
                client.close();
                res.status(500).json({ message: 'MongoDB not connected.' });
                return next(err);
            }

            client.close();

            if (result == null) {
                res.status(404).json({ message: 'Not Found.' });
            } else {
                res.json(result);
            }
        });

    });
})

// 認証(どうやって?)
router.post('/', (req, res, next) => {
    mongodbClient((err, client) => {
        if (err) {
            res.status(500).json({ message: 'MongoDB not connected.' });
            return next(err);
        }

        client.close();
        res.json({ message: 'MongoDB Connected.' });
    });
})

export default router;
