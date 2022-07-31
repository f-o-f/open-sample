const express = require('express')
const router = express.Router()
const Goods = require('../model/goods')

router.get('', function(req, res) {
    Goods.find({}, function(err, foundGoods) {
        return res.json(foundGoods)
    
    })
})

router.get('/:goodsId', function(req, res) {
    const goodsId = req.params.goodsId
    Goods.findById(goodsId, function(err, foundGoods) {
        if(err) {
            return res.status(422).send({errors: [{title: 'Goods error', detail: 'Goods not found!'}]})
          }
        return res.json(foundGoods)
    
    })
})

module.exports = router