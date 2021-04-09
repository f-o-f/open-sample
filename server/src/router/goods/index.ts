import * as Express from 'express';
import mongodbClient from '../../middleware/mongodbClient';
import { GoodsDocument } from '../../middleware/GoodsDocument';


const router = Express.Router();
//商品情報登録
router.post('/', (req, res, next) => {
    // パラメータ取得
    const goods_id = req.body.goods_id;
    const name = req.body.name;
    const size = req.body.size;
    const amount = req.body.amount;
    const note = req.body.note;

    // 必須項目が入力済みかチェック
    if (goods_id === undefined || goods_id === null) {
        res.status(400).json({ message: 'Require Parameter.' });
        return;
    }
    if (goods_id.match(/^[A]+[0-9]{4}/) == null) {
        res.status(400).json({ message: 'Invalid Parameter.' });
        return;
    }
    if (name === undefined || name === null) {
        res.status(400).json({ message: 'Require Parameter.' });
        return;
    }
    if (size === undefined || size === null) {
        res.status(400).json({ message: 'Require Parameter.' });
        return;
    }

    mongodbClient((err, client, db) => {
        if (err) {
            client.close();
            res.status(500).json({ message: err.message });
            return;
        }
        db.collection<GoodsDocument>('goods', (err, collection) => {
            collection.insertOne(
                {
                    name: name,
                    goods_id: goods_id,
                    size: size,
                    amount: amount,
                    note: note,

                },
                (err, result) => {
                    if (err) {
                        client.close();
                        res.status(500).json({ message: err.message });
                        return;
                    }
                    res.json(result.insertedCount);
                }
            );
        });
    });
});

//商品情報更新
router.put('/:goods_id', (req, res, next) => {
    // パラメータ取得
    const goods_id = req.body.goods_id;
    const name = req.body.name;
    const size = req.body.size;
    const amount = req.body.amount;
    const note = req.body.note;
    if (name === undefined || name === null) {
        res.status(400).json({ message: 'Require Parameter.' });
        return;
    }
    if (size === undefined || size === null) {
        res.status(400).json({ message: 'Require Parameter.' });
        return;
    }
    mongodbClient((err, client, db) => {
        if (err) {
            client.close();
            res.status(500).json({ message: err.message });
            return next(err);
        }
        db.collection<GoodsDocument>('goods', (err, collection) => {
            collection.updateOne(
                { "goods_id": goods_id },
                {
                    $set:
                    {
                        name: name,
                        size: size,
                        amount: amount,
                        note: note,
                    }
                },
                (err, result) => {
                    if (err) {
                        client.close();
                        res.status(500).json({ message: err.message });
                        return next(err);
                    }
                    res.set('Access-Control-Allow-Origin', '*');
                    res.json(result);
                }
            );
        });
    });
});

//商品情報取得
router.get('/:goods_id', (req, res, next) => {
    const goods_id = req.params.goods_id;
    mongodbClient((err, client, db) => {
        if (err) {
            client.close();
            res.status(500).json({ message: err.message });
            return next(err);
        }

        db.collection<GoodsDocument>('goods', (err, collection) => {
            collection.findOne({ goods_id: goods_id }, (err, result) => {
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
            });
        })
            ;
    });
});

//商品情報検索
router.post('/search', (req, res, next) => {
    mongodbClient((err, client, db) => {
        if (err) {
            client.close();
            res.status(500).json({ message: err.message });
            return next(err);
        }

        db.collection<GoodsDocument>('goods', (err, collection) => {
            collection.find((err, result) => {
                if (err) {
                    client.close();
                    res.status(500).json({ message: err.message });
                    return next(err);
                }

                if (result == null) {
                    res.status(404).json({ message: 'Not found.' });
                    return next(err);
                } else {
                    var cursor = result;
                    cursor.toArray(function (err, docs) {
                        if (err) {
                            res.status(500).json({ message: err.message });
                            return next(err);
                        }
                        res.json(docs);
                    });
                }
            })
        });
    });
});

export default router;