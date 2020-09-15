 import * as MongoDB from 'mongodb';

export interface GoodsDocument {
    //key: MongoDB.ObjectId;
    name: string;
    goods_id: string;
    size: number;
    amount: number;
    note: string;

   /*  constructor(key, name,goods_id,size,amount,note) {
        this.key = key;
        this.name = name;
        this.goods_id = goods_id;
        this.size = size;
      } */
} 

/* var mongoose     = require('mongoose'); //mongoDBに接続するためのライブラリ
var Schema       = mongoose.Schema; //mongoDBのスキーマを作る
var moment       = require('moment');

var GoodsSchema   = new Schema({
  name: String,
  goods_id: String,
  size: Number,
  amount: Number,
  note: String,
});

GoodsSchema.methods.setDate = function () { 
    //作った時間をセット
    this.date = moment().format("YYYY-MM-DD HH:mm:ss"); 
};

module.exports = mongoose.model('GoodsModel', GoodsSchema); */