import * as Express from 'express';
//import errorJSON from '../../error';
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
    console.log(name);
    console.log(goods_id);
    // 必須項目が入力済みかチェック
    if (goods_id === undefined || name === undefined) {
        res.status(400).json({ message: 'Require Parameter.' });
        return next();
    }

    mongodbClient((err, client, db) => {
        if (err) {
            client.close();
            res.status(500).json({message: err.message});
            return next(err);
        }

        const collection = db.collection<GoodsDocument>('goods');
        collection.insertOne(
            {
                name :name,
                goods_id :goods_id,
                size :size,
                amount :amount,
                note :note,
    
            },
            (err, result) => {
                if (err) {
                    client.close();
                    res.status(500).json({message:err.message});
                    return next(err);
                }

                
               // res.status(200).json(result);
                client.close();
                res.json(result);
            }
        );
    });
});

/* //商品情報更新
router.put('/:id', (req, res, next) => {
    // URLから対象のuser_idを取得
    const user_id = req.params.user;

    // JSONより更新用パラメータを取得
    const new_user_id = req.body.user_id;
    const name = req.body.name;
    const password = req.body.password;

    // 更新用オブジェクト作成
    const updateFields = {};
    if (new_user_id !== undefined) { updateFields['user_id'] = new_user_id; }
    if (name !== undefined) { updateFields['name'] = name; }
    if (password !== undefined) { updateFields['password'] = password; }
    const update = { $set: updateFields };

    mongodbClient((err, client, db) => {
        if (err) {
            client.close();
            res.status(500).json(errorJSON('MongoDB', err.message));
            return next(err);
        }

        const collection = db.collection<UserDocument>('user');
        collection.findOneAndUpdate({ user_id: user_id }, update, (err, result) => {
            if (err) {
                client.close();
                res.status(500).json(errorJSON('MongoDB', err.message));
                return next(err);
            }

            if (result.value === null) {
                // 対象レコードが存在しなかった場合 result.value に null が返る。
                client.close();
                res.status(404).json({ message: 'Not Found.' });
                return;
            }

            // 更新後のdocumentを取得するために再検索する。
            collection.findOne({ _id: result.value._id }, (err, result) => {
                if (err) {
                    client.close();
                    res.status(500).json(errorJSON('MongoDB', err.message));
                    return next(err);
                }

                client.close();
                res.json(filterUserDocument(result));
            });
        });
    });
});

 */


/*
//商品情報更新
router.put('/:id', noImpl);
//商品情報取得
router.get('/:id', noImpl);*/
//商品情報検索
router.post('/search', (req, res, next) => {
     mongodbClient((err, client, db) => {
        if (err) {
            client.close();
            res.status(500).json({message: err.message});
            return next(err);
        }

        const collection = db.collection<GoodsDocument>('goods');
        collection.find((err, result) => {
            if (err) {
                client.close();
                res.status(500).json({message: err.message});
                return next(err);
            }

            client.close();

            if (result == null) {
                res.status(404).json({ message: 'Not found.'});
            }  else
            res.status(200).json(result);
        })

        ;
    }); 
});

export default router;