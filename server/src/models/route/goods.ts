import * as Express from 'express';

//var express = require('express');
var router = Express.Router();
var GoodsModel = require('../goodsModel.ts');

router.post('/',function(req,res){
    var goods = new GoodsModel();

    goods.name = req.body.name;
    goods.goods_id = req.body.goods_id;
    goods.size = req.body.size;
    goods.amount = req.body.amount;
    goods.note = req.body.note;

    goods.save(function(err) {
        if (err){
            // エラーがあった場合エラーメッセージを返す
            res.send(err);
        } else {
            // エラーがなければ「Success!!」
            res.json({ message: 'Success!!' });
        }
    });
});

router.get('/:id', function(req, res) {
    var Goodsid = req.params.id;
    GoodsModel.findById(Goodsid,function(err, goods){
        res.json(goods);
    });
});

router.put('/:id', function(req, res) {
    var Goodsid = req.params.id;

    GoodsModel
        .findById(Goodsid, function(err, goods) {
            if (err) {
                res.send(err);
            } else {

                goods.name = req.body.name;
                goods.goods_id = req.body.goods_id;
                goods.size = req.body.size;
                goods.amount = req.body.amount;
                goods.note = req.body.note;

                goods.save(function(err) {
                    if (err){
                        res.send(err);
                    } else {
                        res.json({ message: 'Success!' });
                    }
                });
            }
        });
});

router.post('/search', function(req, res) {
    GoodsModel.find().then(function(goods){
        res.json(goods);
    });
});

//routerをモジュールとして扱う準備
export default router;
