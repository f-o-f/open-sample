const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const ObjectId = Schema.ObjectId;

const GoodsSchema = new Schema({
    // author: ObjectId,
    name: String,
    goods_id: String,
    size: Number,
    amount: Number,
    // note: String,
});

module.exports = mongoose.model('Goods',GoodsSchema)
