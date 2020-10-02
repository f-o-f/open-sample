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
        db.collection<GoodsDocument>('goods',(err,collection) =>{
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
                res.json(result.insertedCount);
            }
        );
        });
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



//商品情報更新
router.put('/:goods_id', (req, res, next) => {
    // パラメータ取得
    const goods_id = req.body.goods_id;
    const name = req.body.name;
    const size = req.body.size;
    const amount = req.body.amount;
    const note = req.body.note;

    mongodbClient((err, client, db) => {
        if (err) {
            client.close();
            res.status(500).json({message: err.message});
            return next(err);
        }
        db.collection<GoodsDocument>('goods',(err,collection) =>{
        collection.updateOne(
            { "goods_id":goods_id},
            { $set: 
            {   name :name,
                size :size,
                amount :amount,
                note :note,
            }},
            (err, result) => {
                if (err) {
                    client.close();
                    res.status(500).json({message:err.message});
                    return next(err);
                }
                res.json(result);
            }
        );
        });
    });
});

//商品情報取得
router.get('/:goods_id',  (req, res, next) => {
    const goods_id = req.params.goods_id;
    //ここまでOK
    mongodbClient((err, client, db) => {
       if (err) {
           client.close();
           res.status(500).json({message: err.message});
           return next(err);
       }

       db.collection<GoodsDocument>('goods',(err,collection) =>{
       collection.findOne({goods_id:goods_id},(err, result) => {
           if (err) {
               client.close();
               res.status(500).json({message: err.message});
               return next(err);
           }

           if(result == null) {
               res.status(404).json({ message: 'Not found.'});
               return next(err);
           }else{
                res.json(result);
               //console.log(filterGoodsDocument(result));
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
            res.status(500).json({message: err.message});
            return next(err);
        }

        db.collection<GoodsDocument>('goods',(err,collection) =>{
        collection.find((err, result) => {
            if (err) {
                client.close();
                res.status(500).json({message: err.message});
                return next(err);
            }

            if (result == null) {
                res.status(404).json({ message: 'Not found.'});
                return next(err);
            }  else{
                var cursor = result;
                cursor.toArray(function(err, docs){
                    // toArray用のコールバック関数
                    if(err){
                        res.status(500).json({message: err.message});
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