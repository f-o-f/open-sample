var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var GoodsSchema   = new Schema({
    name :String,
    goods_id :String,
    size :Number,
    amount :Number,
    note :String
});

// スキーマをモデルとしてコンパイルし、それをモジュールとして扱えるようにする
module.exports = mongoose.model('GoodsSchema', GoodsSchema);